import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TARGET_EMAIL = 'eduardombielecky@gmail.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function QuickContactForm() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setErrorMessage(t.contact.emptyError);
      setStatus('error');
      triggerShake();
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setErrorMessage(t.contact.invalidError);
      setStatus('error');
      triggerShake();
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: trimmedEmail,
          _subject: `[Portfólio (${language.toUpperCase()})] Novo contato de ${trimmedEmail}`,
          _template: 'table',
          _captcha: 'false',
          mensagem: `Olá Eduardo,\n\nO visitante com o e-mail "${trimmedEmail}" solicitou contato através do formulário do seu portfólio (Idioma: ${language.toUpperCase()}).\n\nData de envio: ${new Date().toLocaleString()}`
        })
      });

      const data = await response.json().catch(() => ({}));

      // Backup local
      try {
        const stored = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
        stored.push({
          email: trimmedEmail,
          language,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('contact_submissions', JSON.stringify(stored));
      } catch (storageErr) {
        console.warn('Local backup error:', storageErr);
      }

      if (response.ok && (data.success === 'true' || data.success === true || !data.error)) {
        setStatus('success');
      } else {
        setErrorMessage(t.contact.networkError);
        setStatus('error');
        triggerShake();
      }
    } catch (err) {
      console.error('API submission error:', err);
      try {
        const stored = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
        stored.push({
          email: trimmedEmail,
          language,
          timestamp: new Date().toISOString(),
          status: 'pending_offline'
        });
        localStorage.setItem('contact_submissions', JSON.stringify(stored));
      } catch (storageErr) {
        console.warn(storageErr);
      }

      setErrorMessage(t.contact.networkError);
      setStatus('error');
      triggerShake();
    }
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="quick-contact-wrapper" id="quick-contact-container">
      {status === 'success' ? (
        <div className="form-confirmation-card" id="contact-success-card">
          <div className="confirmation-icon-wrapper">
            <span className="confirmation-check-ring"></span>
            <i className="fas fa-check confirmation-icon"></i>
          </div>
          <div className="confirmation-content">
            <h4 className="confirmation-title">{t.contact.successTitle}</h4>
            <p className="confirmation-text">
              {t.contact.successTextPrefix}
              <strong>{email}</strong>
              {t.contact.successTextSuffix}
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="confirmation-reset-btn"
            id="btn-reset-contact"
          >
            <i className="fas fa-redo-alt"></i> {t.contact.resetBtn}
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`single-input-form ${shake ? 'shake-animation' : ''} ${
            status === 'error' ? 'has-error' : ''
          }`}
          id="single-input-contact-form"
          noValidate
        >
          <div className="single-input-box">
            <span className="single-input-icon" aria-hidden="true">
              <i className="fas fa-paper-plane"></i>
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') {
                  setStatus('idle');
                  setErrorMessage('');
                }
              }}
              placeholder={t.contact.placeholder}
              className="single-input-field"
              id="contact-email-input"
              aria-label={t.contact.placeholder}
              disabled={status === 'submitting'}
              autoComplete="email"
            />
            <button
              type="submit"
              className="single-input-btn"
              id="contact-submit-btn"
              disabled={status === 'submitting'}
              aria-label={t.contact.submitBtn}
            >
              {status === 'submitting' ? (
                <>
                  <span className="btn-spinner" aria-hidden="true"></span>
                  <span>{t.contact.submittingBtn}</span>
                </>
              ) : (
                <>
                  <span>{t.contact.submitBtn}</span>
                  <i className="fas fa-arrow-right"></i>
                </>
              )}
            </button>
          </div>

          {status === 'error' && errorMessage && (
            <p className="form-validation-message" id="contact-validation-error" role="alert">
              <i className="fas fa-circle-exclamation"></i> {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
