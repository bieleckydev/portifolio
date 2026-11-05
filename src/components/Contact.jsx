import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import QuickContactForm from './QuickContactForm';
import './Contact.css';

const EMAIL = 'eduardombielecky@gmail.com';

function CopyEmail({ labels }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Sem acesso à área de transferência: o endereço continua selecionável na tela
    }
  };

  return (
    <button type="button" className="contact__copy" onClick={copy} aria-live="polite">
      {copied ? labels.copied : labels.copy}
    </button>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const channels = [
    {
      label: 'WhatsApp',
      value: '+55 11 96148-5534',
      href: 'https://wa.me/5511961485534'
    },
    {
      label: 'LinkedIn',
      value: 'in/bielecky',
      href: 'https://www.linkedin.com/in/bielecky/'
    },
    {
      label: 'GitHub',
      value: 'bieleckydev',
      href: 'https://github.com/bieleckydev'
    }
  ];

  return (
    <section id="contato" className="split contact" data-section aria-labelledby="contact-title">
      <div className="split__read contact__read">
        <h2 id="contact-title" className="t-lead contact__prompt" data-reveal style={{ '--i': 0 }}>
          <span className="muted">{c.promptA}</span> <span>{c.promptB}</span>
        </h2>

        <div data-reveal style={{ '--i': 1 }}>
          <QuickContactForm />
        </div>

        <dl className="contact__channels" data-reveal style={{ '--i': 2 }}>
          <div className="contact__channel">
            <dt className="t-small muted">{c.emailLabel}</dt>
            <dd>
              <a className="text-link" href={`mailto:${EMAIL}?subject=${encodeURIComponent(c.subject)}`}>
                {EMAIL}
              </a>
              <CopyEmail labels={c} />
            </dd>
          </div>
          {channels.map((ch) => (
            <div key={ch.label} className="contact__channel">
              <dt className="t-small muted">{ch.label}</dt>
              <dd>
                <a className="text-link" href={ch.href} target="_blank" rel="noreferrer">
                  {ch.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="split__stage contact__stage">
        <div className="ticket" data-ui data-reveal style={{ '--i': 1 }}>
          <div className="ticket__slot" aria-hidden="true" />
          <div className="ticket__paper">
            <p className="ticket__center ticket__strong">{c.ticket.title}</p>
            <p className="ticket__center">Eduardo Bielecky</p>
            <div className="ticket__rule" aria-hidden="true" />
            {c.ticket.lines.map(([label, value]) => (
              <div key={label} className="ticket__row">
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
            <div className="ticket__rule" aria-hidden="true" />
            <p className="ticket__email">{EMAIL}</p>
            <div className="ticket__rule" aria-hidden="true" />
            <p className="ticket__center">{c.ticket.thanks}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
