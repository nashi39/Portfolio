import React from 'react'
import Header from './components/Header'
import ProjectGrid from './components/ProjectGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        {/* Project Section */}
        <div style={{ paddingTop: '4rem' }}></div>
        <ProjectGrid />
      </main>

      <Footer />
    </div>
  )
}

export default App
