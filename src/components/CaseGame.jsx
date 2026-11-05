import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './CaseGame.css';

// Minijogo do caixa: tudo acontece na página, nada fala com o sistema real.
const ROUNDS = 5;
const SERVICE_RATE = 0.1;
const FEEDBACK_MS = 1200;
const money = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const rand = (max) => Math.floor(Math.random() * max);

function makeOrders(items) {
  return Array.from({ length: ROUNDS }, () => {
    const pool = [...items];
    const lines = {};
    const count = 1 + rand(3);
    for (let i = 0; i < count && pool.length; i += 1) {
      const [item] = pool.splice(rand(pool.length), 1);
      lines[item.id] = 1 + rand(3);
    }
    const atTable = Math.random() < 0.65;
    return { lines, atTable, table: 1 + rand(20) };
  });
}

function orderTotal(order, items) {
  const subtotal = items.reduce((sum, item) => sum + (order.lines[item.id] || 0) * item.price, 0);
  return order.atTable ? subtotal + Math.round(subtotal * SERVICE_RATE * 100) / 100 : subtotal;
}

const sameLines = (a, b) => {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...keys].every((k) => (a[k] || 0) === (b[k] || 0));
};

function clock(ms) {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export default function CaseGame({ onQuit }) {
  const { t } = useLanguage();
  const g = t.caseGame;
  const items = t.pos.items;
  const headingRef = useRef(null);

  const [orders, setOrders] = useState(() => makeOrders(items));
  const [round, setRound] = useState(0);
  const [bill, setBill] = useState({});
  const [results, setResults] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [now, setNow] = useState(() => Date.now());
  const [finishedAt, setFinishedAt] = useState(null);

  const done = results.length === ROUNDS && !feedback;
  const order = orders[round];
  const elapsed = (finishedAt || now) - startedAt;

  useEffect(() => {
    headingRef.current?.focus();
  }, [done]);

  useEffect(() => {
    if (finishedAt) return undefined;
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, [finishedAt]);

  const billLines = useMemo(
    () => items.filter((item) => bill[item.id]).map((item) => ({ ...item, qty: bill[item.id] })),
    [bill, items]
  );
  const subtotal = billLines.reduce((sum, line) => sum + line.qty * line.price, 0);

  const add = (id) => setBill((b) => ({ ...b, [id]: Math.min(9, (b[id] || 0) + 1) }));
  const remove = (id) =>
    setBill((b) => {
      const next = { ...b, [id]: (b[id] || 0) - 1 };
      if (next[id] <= 0) delete next[id];
      return next;
    });

  const close = (withService) => {
    const itemsOk = sameLines(bill, order.lines);
    const serviceOk = withService === order.atTable;
    const ok = itemsOk && serviceOk;
    const result = { ok, order };
    const nextResults = [...results, result];
    setResults(nextResults);
    setFeedback({ ok, itemsOk, serviceOk });
    if (nextResults.length === ROUNDS) setFinishedAt(Date.now());

    setTimeout(() => {
      setFeedback(null);
      setBill({});
      if (nextResults.length < ROUNDS) setRound((r) => r + 1);
    }, FEEDBACK_MS);
  };

  const restart = () => {
    setOrders(makeOrders(items));
    setRound(0);
    setBill({});
    setResults([]);
    setFeedback(null);
    setStartedAt(Date.now());
    setNow(Date.now());
    setFinishedAt(null);
  };

  if (done) {
    const right = results.filter((r) => r.ok).length;
    const shiftTotal = results.reduce((sum, r) => sum + orderTotal(r.order, items), 0);
    return (
      <div className="game" data-ui>
        <div className="game__printer">
          <div className="game__slot" aria-hidden="true" />
          <div className="game__receipt game__receipt--summary">
            <h3 className="game__center game__strong" tabIndex={-1} ref={headingRef}>
              {g.summaryTitle}
            </h3>
            <p className="game__center">ADEGA DO DINO</p>
            <div className="game__rule" aria-hidden="true" />
            <ul className="game__lines">
              {results.map((r, i) => (
                <li key={i} className="game__row">
                  <span>{r.order.atTable ? g.table.replace('{n}', r.order.table) : g.counter}</span>
                  <span>
                    {money.format(orderTotal(r.order, items))} {r.ok ? g.okMark : g.badMark}
                  </span>
                </li>
              ))}
            </ul>
            <div className="game__rule" aria-hidden="true" />
            <div className="game__row game__total">
              <span>{g.shiftTotal}</span>
              <span>R$ {money.format(shiftTotal)}</span>
            </div>
            <div className="game__row">
              <span>{g.time}</span>
              <span>{clock(elapsed)}</span>
            </div>
          </div>
        </div>
        <p className="game__verdict t-lead" role="status">
          {g.summary.replace('{ok}', right).replace('{total}', ROUNDS).replace('{time}', clock(elapsed))}
        </p>
        <div className="game__actions">
          <button type="button" className="button button--accent" onClick={restart}>
            {g.again}
          </button>
          <button type="button" className="game__link" onClick={onQuit}>
            {g.quit}
          </button>
        </div>
      </div>
    );
  }

  const locked = Boolean(feedback);

  return (
    <div className="game" data-ui>
      <div className="game__bar">
        <h3 className="game__strong" tabIndex={-1} ref={headingRef}>
          {g.progress.replace('{n}', round + 1).replace('{total}', ROUNDS)}
        </h3>
        <span className="game__clock" aria-label={g.time}>
          {clock(elapsed)}
        </span>
        <button type="button" className="game__link" onClick={onQuit}>
          {g.quit}
        </button>
      </div>

      <div className="game__ticket" key={round}>
        <p className="game__strong">
          {order.atTable ? g.table.replace('{n}', order.table) : g.counter}
          <span className="game__muted"> · {order.atTable ? g.tableRule : g.counterRule}</span>
        </p>
        <ul className="game__lines">
          {items
            .filter((item) => order.lines[item.id])
            .map((item) => (
              <li key={item.id}>
                {order.lines[item.id]}x {item.name}
              </li>
            ))}
        </ul>
      </div>

      <div className="game__desk">
        <div className="game__keys" role="group" aria-label={t.pos.keysLabel}>
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="game__key"
              onClick={() => add(item.id)}
              disabled={locked}
              aria-label={`${t.pos.add} ${item.name}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="game__bill" aria-live="polite">
          <p className="game__strong">{g.bill}</p>
          {billLines.length === 0 ? (
            <p className="game__muted">{g.empty}</p>
          ) : (
            <ul className="game__lines">
              {billLines.map((line) => (
                <li key={line.id} className="game__row game__line">
                  <span>
                    {line.qty}x {line.name}
                  </span>
                  <button
                    type="button"
                    className="game__minus"
                    onClick={() => remove(line.id)}
                    disabled={locked}
                    aria-label={`${g.removeOne} ${line.name}`}
                  >
                    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                      <path d="M3 8h10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="game__row game__subtotal">
            <span>{t.pos.subtotal}</span>
            <span>{money.format(subtotal)}</span>
          </div>
        </div>
      </div>

      <div className="game__actions">
        <button
          type="button"
          className="button button--accent"
          onClick={() => close(true)}
          disabled={locked || billLines.length === 0}
        >
          {g.closeWith}
        </button>
        <button
          type="button"
          className="button"
          onClick={() => close(false)}
          disabled={locked || billLines.length === 0}
        >
          {g.closeWithout}
        </button>
      </div>

      <p className={`game__feedback${feedback ? (feedback.ok ? ' is-ok' : ' is-bad') : ''}`} role="status">
        {feedback &&
          (feedback.ok
            ? g.right
            : !feedback.itemsOk
              ? g.wrongItems
              : g.wrongService)}
      </p>
    </div>
  );
}
