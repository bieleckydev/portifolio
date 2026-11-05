import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

function Group({ group }) {
  return (
    <div className="ledger__group">
      <h3 className="t-small ledger__label">{group.label}</h3>
      <ul className="ledger__rows">
        {group.rows.map((row) => (
          <li key={row.name} className="ledger__row">
            <div className="ledger__main">
              <span className="ledger__name">{row.name}</span>
              {row.detail && <span className="ledger__detail">{row.detail}</span>}
            </div>
            {row.value && <span className="t-small ledger__value">{row.value}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experiencia" className="full ledger" data-section>
      <div className="ledger__col" data-reveal style={{ '--i': 0 }}>
        <h2 className="t-heading">{e.title}</h2>
        {e.groups.map((group) => (
          <Group key={group.label} group={group} />
        ))}
      </div>

      <div className="ledger__col" id="habilidades" data-reveal style={{ '--i': 1 }}>
        <h2 className="t-heading">{e.skillsTitle}</h2>
        {e.skills.map((group) => (
          <Group key={group.label} group={group} />
        ))}
      </div>
    </section>
  );
}
