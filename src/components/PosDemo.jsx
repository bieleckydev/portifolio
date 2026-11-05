import React, { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './PosDemo.css';

// Valores em reais, como no caixa de verdade
const money = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const MAX_QTY = 9;
const SERVICE_RATE = 0.1;
const INITIAL_ORDER = { picanha: 1, cerveja: 2 };

function stamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function PosDemo() {
  const { t } = useLanguage();
  const p = t.pos;
  const [order, setOrder] = useState(INITIAL_ORDER);
  const [withService, setWithService] = useState(true);
  const [printedAt] = useState(stamp);

  const lines = useMemo(
    () =>
      p.items
        .filter((item) => order[item.id])
        .map((item) => ({ ...item, qty: order[item.id], amount: item.price * order[item.id] })),
    [order, p.items]
  );

  const subtotal = lines.reduce((sum, line) => sum + line.amount, 0);
  const service = withService ? Math.round(subtotal * SERVICE_RATE * 100) / 100 : 0;
  const total = subtotal + service;

  const add = (id) =>
    setOrder((current) => ({ ...current, [id]: Math.min(MAX_QTY, (current[id] || 0) + 1) }));

  return (
    <figure className="pos" data-ui aria-label={p.label}>
      <div className="pos__panel">
        <div className="pos__keys" role="group" aria-label={p.keysLabel}>
          {p.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="pos__key"
              onClick={() => add(item.id)}
              disabled={order[item.id] >= MAX_QTY}
              aria-label={`${p.add} ${item.name}, R$ ${money.format(item.price)}`}
            >
              <span className="pos__key-name">{item.name}</span>
              <span className="pos__key-price num">{money.format(item.price)}</span>
            </button>
          ))}
        </div>

        <div className="pos__controls">
          <label className="pos__toggle">
            <input
              type="checkbox"
              checked={withService}
              onChange={(e) => setWithService(e.target.checked)}
            />
            <span>{p.service}</span>
          </label>
          <button
            type="button"
            className="pos__clear"
            onClick={() => setOrder({})}
            disabled={lines.length === 0}
          >
            {p.clear}
          </button>
        </div>
      </div>

      <div className="pos__printer">
        <div className="pos__slot" aria-hidden="true" />
        <div className="pos__paper" aria-live="polite" aria-atomic="false">
          <p className="pos__center pos__strong">{p.shop}</p>
          <p className="pos__center">{p.sub}</p>
          <div className="pos__row">
            <span>{p.table}</span>
            <span className="num">{printedAt}</span>
          </div>
          <div className="pos__rule" aria-hidden="true" />

          {lines.length === 0 ? (
            <p className="pos__center pos__empty">{p.empty}</p>
          ) : (
            <ul className="pos__lines">
              {lines.map((line) => (
                <li key={line.id} className="pos__row pos__line">
                  <span>
                    <span className="num">{line.qty}x</span> {line.name}
                  </span>
                  <span className="num">{money.format(line.amount)}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="pos__rule" aria-hidden="true" />
          <div className="pos__row">
            <span>{p.subtotal}</span>
            <span className="num">{money.format(subtotal)}</span>
          </div>
          {withService && (
            <div className="pos__row pos__line">
              <span>{p.serviceLine}</span>
              <span className="num">{money.format(service)}</span>
            </div>
          )}
          <div className="pos__row pos__total">
            <span>{p.total}</span>
            <span className="num">R$ {money.format(total)}</span>
          </div>
          <div className="pos__rule" aria-hidden="true" />
          <p className="pos__center">{p.notFiscal}</p>
          <p className="pos__center">{p.thanks}</p>
        </div>
      </div>

      <figcaption className="pos__caption t-small">{p.caption}</figcaption>
    </figure>
  );
}
