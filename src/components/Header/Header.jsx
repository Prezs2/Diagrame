import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="header">
      <div className="header__container">
        <div className="header__logo">
          <span className="header__logo-icon">◆</span>
          <span className="header__logo-text">CloudAnalysis</span>
        </div>
        <nav className="header__nav">
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('diagram-section')}
          >
            Diagrama
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('proscons-section')}
          >
            Ventajas/Desventajas
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('pricing-section')}
          >
            Precios
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('scenarios-section')}
          >
            Escenarios
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('responsibility-section')}
          >
            Gestión
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('table-section')}
          >
            Atributos
          </button>
          <button
            className="header__nav-link"
            onClick={() => scrollToSection('inventory-section')}
          >
            Caso Real
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
