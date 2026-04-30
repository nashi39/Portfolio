/**
 * ProjectGridコンポーネント
 * 登録されているすべてのプロジェクトをグリッドレイアウトで一覧表示します。
 * data/projects.js からデータを取得し、ProjectCardを動的に生成します。
 */
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectGrid = () => {
  return (
    <section id="projects">
      <div className="container">
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Selected Works</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            これまでに開発してきた主要なプロジェクトのご紹介です。
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2.5rem'
        }}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
