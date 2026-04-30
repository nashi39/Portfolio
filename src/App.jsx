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

        {/* About Section */}
        <section id="about" style={{ backgroundColor: 'var(--bg-subtle)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Me</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  プログラムを書くことは、私にとって創造的なプロセスそのものです。
                  バックエンドの堅牢なロジックから、フロントエンドの細かなインタラクションまで、
                  一貫したクオリティを追求しています。
                </p>
                <p style={{ color: 'var(--text-muted)' }}>
                  現在はReactやNode.jsを中心としたWeb開発のほか、
                  PythonやC#を用いたデスクトップアプリケーションの開発にも取り組んでいます。
                </p>
              </div>
              <div style={{
                height: '400px',
                backgroundColor: '#ddd',
                borderRadius: '24px',
                background: 'linear-gradient(45deg, #eee, #fff)',
                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.05)'
              }}></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get In Touch</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
              プロジェクトに関するご相談や、技術的なお話など、お気軽にご連絡ください。
            </p>
            <a href="mailto:example@example.com" className="btn" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Say Hello
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
