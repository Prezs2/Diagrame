import { useEffect, useRef } from 'react'
import ComparisonCard from '../ComparisonCard/ComparisonCard'
import './DiagramSection.css'

const conceptsData = [
  {
    id: 'concept-1',
    title: 'Infraestructura (IaaS)',
    subtitle: 'Tú controlas el hardware virtual.',
    color: 'blue',
    icon: '🖥️',
    features: [
      'Alquila servidores y almacenamiento.',
      'Instala tu propio sistema operativo.',
      'Configura redes y cortafuegos.',
      'Escala recursos manualmente.',
      'Tú te encargas de la seguridad interna.',
    ],
    stat: 'IaaS',
    statLabel: 'Control Total',
  },
  {
    id: 'concept-2',
    title: 'Plataforma (PaaS)',
    subtitle: 'Enfócate solo en programar.',
    color: 'teal',
    icon: '⚙️',
    features: [
      'Herramientas listas para desarrollar.',
      'Bases de datos gestionadas.',
      'Despliegue rápido de código.',
      'Escalado automático de la app.',
      'El proveedor cuida el servidor.',
    ],
    stat: 'PaaS',
    statLabel: 'Agilidad Alta',
  },
  {
    id: 'concept-3',
    title: 'Software (SaaS)',
    subtitle: 'Usa la aplicación de inmediato.',
    color: 'orange',
    icon: '☁️',
    features: [
      'Acceso directo por internet.',
      'Sin nada que instalar o parchar.',
      'Actualizaciones automáticas.',
      'Todo lo gestiona el proveedor.',
      'Ideal para uso inmediato.',
    ],
    stat: 'SaaS',
    statLabel: 'Simplicidad',
  },
]

function DiagramSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('diagram-section--visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="diagram-section" id="diagram-section" ref={sectionRef}>
      <div className="diagram-section__header">
        <span className="diagram-section__badge">Guía Técnica Cloud</span>
        <h1 className="diagram-section__title">
          Modelos de <span className="gradient-text">Servicio en la Nube</span>
        </h1>
        <p className="diagram-section__description">
          Explicación sencilla de cómo funcionan IaaS, PaaS y SaaS para facilitar la transición digital de la empresa.
        </p>
      </div>

      <div className="diagram-section__connector">
        <div className="diagram-section__connector-line"></div>
        <div className="diagram-section__connector-dot"></div>
        <div className="diagram-section__connector-branches">
          <div className="diagram-section__branch diagram-section__branch--left"></div>
          <div className="diagram-section__branch diagram-section__branch--center"></div>
          <div className="diagram-section__branch diagram-section__branch--right"></div>
        </div>
      </div>

      <div className="diagram-section__cards">
        {conceptsData.map((concept, index) => (
          <ComparisonCard key={concept.id} data={concept} delay={index * 150} />
        ))}
      </div>
    </section>
  )
}

export default DiagramSection
