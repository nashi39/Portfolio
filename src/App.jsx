import React from 'react'
import Header from './components/Header'
import ProjectGrid from './components/ProjectGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section style={{ 
          padding: '10rem 0 6rem 0',
          background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
        }}>
          <div className="container">
            <h1 className="fade-in" style={{ 
              fontSize: 'clamp(3rem, 8vw, 5rem)', 
              lineHeight: 1.1,
              marginBottom: '2rem',
              maxWidth: '800px'
            }}>
              Crafting Digital <span style={{ color: 'var(--accent)' }}>Experiences</span> through Code.
            </h1>
            <p className="fade-in" style={{ 
              fontSize: '1.4rem', 
              color: 'var(--text-muted)',
              maxWidth: '600px',
              animationDelay: '0.2s'
            }}>
              最新の技術スタックと洗練されたUIを融合させ、ユーザーに価値を届けるソフトウェアを開発しています。
            </p>
          </div>
        </section>

        <ProjectGrid />
      </main>

      <Footer />
    </div>
  )
}

export default App
