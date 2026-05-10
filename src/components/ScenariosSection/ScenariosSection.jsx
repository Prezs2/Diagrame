import { useEffect, useRef, useState } from 'react'
import './ScenariosSection.css'

const scenariosData = [
  {
    title: 'Infrastructure as a Service',
    icon: '📦',
    color: 'blue',
    useCases: [
      { label: 'Análisis de Big Data', desc: 'Sistemas que requieren GPUs o CPUs dedicadas.' },
      { label: 'Infraestructura Legacy', desc: 'Migración de servidores antiguos "tal cual" (Lift & Shift).' },
      { label: 'Entornos Personalizados', desc: 'Cuando se requiere una configuración de red muy específica.' },
    ]
  },
  {
    title: 'Platform as a Service',
    icon: '🚀',
    color: 'teal',
    useCases: [
      { label: 'Desarrollo de Apps Web', desc: 'Despliegue rápido de aplicaciones sin gestionar el SO.' },
      { label: 'Microservicios y APIs', desc: 'Ideal para arquitecturas distribuidas modernas.' },
      { label: 'Análisis de Datos', desc: 'Plataformas de Big Data y BI listas para procesar.' }
    ]
  },
  {
    title: 'Software as a Service',
    icon: '💎',
    color: 'orange',
    useCases: [
      { label: 'Productividad y Oficina', desc: 'Herramientas como Office 365, Google Workspace.' },
      { label: 'Gestión Empresarial (CRM)', desc: 'Salesforce, HubSpot y herramientas de marketing.' },
      { label: 'Colaboración y Comunicación', desc: 'Slack, Zoom, Microsoft Teams.' }
    ]
  }
]

function ScenariosSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`scenarios-section ${isVisible ? 'scenarios-section--visible' : ''}`} id="scenarios-section" ref={sectionRef}>
      <div className="scenarios-section__header">
        <span className="scenarios-section__badge">Casos de Uso</span>
        <h2 className="scenarios-section__title">
          Escenarios de <span className="gradient-text-scenarios">Aplicación</span>
        </h2>
        <p className="scenarios-section__description">
          ¿Cuándo es mejor elegir una arquitectura sobre otra? Ejemplos prácticos y recomendaciones.
        </p>
      </div>

      <div className="scenarios-grid">
        {scenariosData.map((arch, i) => (
          <div key={i} className={`scenarios-card scenarios-card--${arch.color}`} style={{ animationDelay: `${i * 150}ms` }}>
            <div className="scenarios-card__header">
              <span className="scenarios-card__icon">{arch.icon}</span>
              <h3>{arch.title}</h3>
            </div>
            <div className="scenarios-card__body">
              {arch.useCases.map((uc, j) => (
                <div key={j} className="scenario-item">
                  <span className="scenario-item__label">{uc.label}</span>
                  <p className="scenario-item__desc">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ScenariosSection
