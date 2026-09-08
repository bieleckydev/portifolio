import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511961485534"
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
      aria-label="Contato pelo WhatsApp"
      id="whatsapp-floating-btn"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
