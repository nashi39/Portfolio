import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="fade-in" style={{
      backgroundColor: 'var(--bg-color)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: 'var(--card-shadow)',
      transition: 'var(--transition)',
      border: '1px solid var(--border-color)',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)';
      e.currentTarget.style.transform = 'translateY(-10px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'var(--card-shadow)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      <div style={{
        width: '100%',
        height: '240px',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-subtle)'
      }}>
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <div style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          {project.description}
        </p>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
            Languages
          </div>
          {project.languages.map(lang => (
            <span key={lang} className="tag">{lang}</span>
          ))}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
            Frameworks
          </div>
          {project.frameworks.map(fw => (
            <span key={fw} className="tag" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>{fw}</span>
          ))}
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', textAlign: 'center' }}>
          View Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
