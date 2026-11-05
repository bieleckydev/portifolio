import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TARGET_EMAIL = 'eduardombielecky@gmail.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function QuickContactForm() {
  const { t, language } = useLanguage();
  const c = t.contact;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const fail = (message) => {
    setErrorMessage(message);
    setStatus('error');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) return fail(c.emptyError);
    if (!EMAIL_REGEX.test(trimmed)) return fail(c.invalidError);

    setErrorMessage('');
    setStatus('submitting');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: trimmed,
          _subject: `[Portfólio (${language.toUpperCase()})] Novo contato de ${trimmed}`,
          _template: 'table',
          _captcha: 'false',
          mensagem: `O visitante com o e-mail "${trimmed}" pediu contato pelo portfólio (idioma: ${language.toUpperCase()}).`
        })
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true || !data.error)) {
        setStatus('success');
      } else {
        fail(c.networkError);
      }
    } catch {
      fail(c.networkError);
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form contact-form--done" role="status">
        <p className="t-lead">{c.successTitle}</p>
        <p>{c.successText.replace('{email}', email.trim())}</p>
        <button
          type="button"
          className="text-link contact-form__reset"
          onClick={() => {
            setEmail('');
            setStatus('idle');
          }}
        >
          {c.reset}
        </button>
      </div>
    );
  }

  const hasError = status === 'error' && errorMessage;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label className="t-small contact-form__label" htmlFor="contact-email">
        {c.label}
      </label>
      <div className={`contact-form__field${hasError ? ' has-error' : ''}`}>
        <input
          id="contact-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={c.placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          disabled={status === 'submitting'}
          aria-invalid={hasError ? 'true' : undefined}
          aria-describedby={hasError ? 'contact-email-error' : 'contact-email-hint'}
        />
        <button type="submit" className="contact-form__send" disabled={status === 'submitting'}>
          {status === 'submitting' ? c.submitting : c.submit}
          <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
            <path d="M3 10h13M11 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
      {hasError ? (
        <p id="contact-email-error" className="t-small contact-form__error" role="alert">
          {errorMessage}
        </p>
      ) : (
        <p id="contact-email-hint" className="t-small muted contact-form__hint">
          {c.hint}
        </p>
      )}
    </form>
  );
}
