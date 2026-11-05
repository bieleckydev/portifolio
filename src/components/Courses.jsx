import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COURSE_GROUPS, COURSES_URL } from '../data/courses';
import './Courses.css';

const LOCALES = { pt: 'pt-BR', en: 'en-US', zh: 'zh-CN' };

export default function Courses() {
  const { t, language } = useLanguage();
  const c = t.courses;
  const month = new Intl.DateTimeFormat(LOCALES[language] || 'pt-BR', { month: 'short', year: 'numeric' });
  const total = COURSE_GROUPS.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <section id="cursos" className="full courses" data-section aria-labelledby="courses-title">
      <div className="courses__head" data-reveal style={{ '--i': 0 }}>
        <h2 id="courses-title" className="t-heading">
          {c.title}
        </h2>
        <p className="courses__lead">
          {c.lead.replace('{total}', total)}{' '}
          <a className="text-link" href={COURSES_URL} target="_blank" rel="noreferrer">
            {c.link}
          </a>
        </p>
      </div>

      <div className="courses__groups">
        {COURSE_GROUPS.map((group, i) => (
          <div key={group.id} className="courses__group" data-reveal style={{ '--i': i + 1 }}>
            <h3 className="t-small courses__label">{c.groups[group.id]}</h3>
            <ul className="courses__rows">
              {group.items.map((item) => (
                <li key={item.title} className="courses__row">
                  <span className="courses__name">{item.title}</span>
                  <span className="t-small courses__meta">
                    {item.issuer}, {month.format(new Date(`${item.date}-15T12:00:00`))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
