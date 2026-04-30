import React from 'react';

const Header = () => {
  return (
    <header style={{
      padding: '2rem 0',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>PORTFOLIO</h1>
        <nav>
          <ul style={{ display: 'flex', gap: '2rem' }}>
            <li><a href="#projects" style={{ fontWeight: 600 }}>Projects</a></li>
            <li><a href="#about" style={{ fontWeight: 600 }}>About</a></li>
            <li><a href="#contact" style={{ fontWeight: 600 }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
