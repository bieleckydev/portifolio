import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  const categories = t.skills.categories;

  const [activeSkillId, setActiveSkillId] = useState('skill-java');
  const [hoveredSkillId, setHoveredSkillId] = useState(null);

  // Find the active skill object based on activeSkillId in current language
  const allSkills = categories.flatMap((cat) => cat.skills);
  const activeSkill = allSkills.find((s) => s.id === activeSkillId) || allSkills[0];

  const handleSelectSkill = (skill) => {
    setActiveSkillId(skill.id);
  };

  const handleMouseEnter = (skill) => {
    setHoveredSkillId(skill.id);
    setActiveSkillId(skill.id);
  };

  const handleMouseLeave = () => {
    setHoveredSkillId(null);
  };

  return (
    <section id="habilidades" className="section skills">

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header reveal">
          <h2 className="section-title" id="skills-heading">
            {t.skills.title}
          </h2>
          <p className="skills-subtitle">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Grid de Categorias com Tags Flutuantes Interativas */}
        <div className="skills-grid" id="skills-grid-container">
          {categories.map((category, idx) => (
            <div
              key={category.id}
              id={category.id}
              className="skill-category minimal-card reveal"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <div className="skill-category-header">
                <i className={category.icon} aria-hidden="true"></i>
                <h3>{category.title}</h3>
              </div>

              <div className="interactive-tags-cloud">
                {category.skills.map((skill) => {
                  const isHovered = hoveredSkillId === skill.id;
                  const isSelected = activeSkill?.id === skill.id;

                  return (
                    <div
                      key={skill.id}
                      className={`floating-tag-wrapper ${isHovered ? 'is-hovered' : ''} ${
                        isSelected ? 'is-selected' : ''
                      }`}
                      onMouseEnter={() => handleMouseEnter(skill)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleSelectSkill(skill)}
                    >
                      <button
                        type="button"
                        className={`floating-skill-tag ${skill.featured ? 'tag-featured' : ''} ${
                          isSelected ? 'active' : ''
                        }`}
                        aria-expanded={isHovered}
                        aria-label={`${t.skills.inspectAria} ${skill.name}`}
                      >
                        <span className="floating-tag-indicator" aria-hidden="true"></span>
                        <span className="floating-tag-name">{skill.name}</span>
                        {skill.badge && (
                          <span className="floating-tag-badge">{skill.badge}</span>
                        )}
                      </button>

                      {/* Micro-Popover Flutuante */}
                      <div
                        className="floating-tag-popover"
                        role="tooltip"
                        aria-hidden={!isHovered}
                      >
                        <div className="popover-top">
                          <span className="popover-project">
                            <i className="fas fa-folder-open"></i> {skill.project}
                          </span>
                          <span className="popover-badge">{skill.badge}</span>
                        </div>
                        <p className="popover-summary">{skill.summary}</p>
                        <div className="popover-footer">
                          <span className="popover-hint">
                            <i className="fas fa-check-circle"></i> {t.skills.realAppBadge}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

