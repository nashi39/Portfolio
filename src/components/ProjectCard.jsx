/**
 * ProjectCardコンポーネント
 * 個々のプロジェクト（成果物）の情報を表示するカード型コンポーネントです。
 * 画像、タイトル、説明、使用技術タグ、リンクボタンを含みます。
 */
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-image" style={{ 
        display: 'flex', 
        gap: '2rem', 
        padding: '3rem', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'var(--bg-subtle)'
      }}>
        {project.images.map((img, index) => (
          <img 
            key={index}
            src={`${import.meta.env.BASE_URL}${img}`} 
            alt={`${project.title} ${index + 1}`} 
            style={{ 
              flex: project.images.length > 1 ? (index === 1 ? '1.8' : '1') : '1', 
              width: '0', 
              maxHeight: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
            }}
          />
        ))}
      </div>
      
      <div className="project-card-content">
        <h3 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>{project.title}</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
          {project.description}
        </p>
        
        <div style={{ display: 'flex', gap: '4rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Languages
            </div>
            {project.languages.map(lang => (
              <span key={lang} className="tag">{lang}</span>
            ))}
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Tools
            </div>
            {project.tools.map(tool => (
              <span key={tool} className="tag" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>{tool}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
