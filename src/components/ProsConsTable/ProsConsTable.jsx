import { useEffect, useRef, useState } from 'react'
import './ProsConsTable.css'

const prosConsData = [
  {
    id: 'proscons-1',
    title: 'Infrastructure as a Service',
    icon: '📦',
    color: 'blue',
    pros: [
      'Control total sobre la configuración del servidor.',
      'Escalabilidad de recursos bajo demanda.',
      'Flexibilidad absoluta para software personalizado.',
      'Independencia total del sistema operativo.',
      'Pago exacto por el tiempo de computación usado.',
    ],
    cons: [
      'Requiere personal con altos conocimientos técnicos.',
      'Mayor carga administrativa y de seguridad.',
      'Responsabilidad total sobre parches del sistema.',
      'Configuración inicial compleja y tediosa.',
      'Gestión de red y almacenamiento manual.',
    ],
  },
  {
    id: 'proscons-2',
    title: 'Platform as a Service',
    icon: '🚀',
    color: 'teal',
    pros: [
      'Reducción drástica del tiempo de desarrollo.',
      'Cero gestión de servidores o sistemas operativos.',
      'Escalabilidad automática sin intervención manual.',
      'Entornos colaborativos integrados por defecto.',
      'Enfoque exclusivo en la lógica de la aplicación.',
    ],
    cons: [
      'Dependencia del proveedor (Vendor Lock-in).',
      'Personalización limitada del entorno de ejecución.',
      'Posibles incompatibilidades con ciertas librerías.',
      'Menor control sobre la infraestructura base.',
      'Riesgo de cambios inesperados en la plataforma.',
    ],
  },
  {
    id: 'proscons-3',
    title: 'Software as a Service',
    icon: '💎',
    color: 'orange',
    pros: [
      'Acceso instantáneo desde cualquier lugar y dispositivo.',
      'Mantenimiento y actualizaciones gestionados por el proveedor.',
      'Cero instalación o configuración de hardware.',
      'Modelo de costos predecible y accesible.',
      'Fácil adopción para usuarios no técnicos.',
    ],
    cons: [
      'Control nulo sobre la privacidad de los datos.',
      'Dependencia total de la conexión a Internet.',
      'Limitaciones extremas en la personalización.',
      'Dificultad para integrar con sistemas locales.',
      'Sin control sobre las actualizaciones de funciones.',
    ],
  },
]

function ProsConsTable() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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

  const current = prosConsData[activeTab]

  return (
    <section
      className={`proscons-section ${isVisible ? 'proscons-section--visible' : ''}`}
      id="proscons-section"
      ref={sectionRef}
    >
      <div className="proscons-section__header">
        <span className="proscons-section__badge">Puntos Clave</span>
        <h2 className="proscons-section__title">
          Ventajas y <span className="gradient-text-proscons">Desventajas</span>
        </h2>
        <p className="proscons-section__description">
          Análisis directo de los beneficios y limitaciones de cada arquitectura de servicio.
        </p>
      </div>

      {/* Tab selector */}
      <div className="proscons-tabs">
        {prosConsData.map((item, index) => (
          <button
            key={item.id}
            className={`proscons-tab proscons-tab--${item.color} ${activeTab === index ? 'proscons-tab--active' : ''}`}
            onClick={() => setActiveTab(index)}
            id={`proscons-tab-${item.color}`}
          >
            <span className="proscons-tab__icon">{item.icon}</span>
            <span className="proscons-tab__label">{item.title}</span>
          </button>
        ))}
      </div>

      {/* Pros & Cons Grid */}
      <div className="proscons-grid" key={current.id}>
        {/* Ventajas */}
        <div className="proscons-card proscons-card--pros">
          <div className="proscons-card__header">
            <span className="proscons-card__header-icon">✅</span>
            <h3 className="proscons-card__header-title">Ventajas</h3>
          </div>
          <ul className="proscons-card__list">
            {current.pros.map((pro, index) => (
              <li
                key={index}
                className="proscons-card__item proscons-card__item--pro"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="proscons-card__item-icon proscons-card__item-icon--pro">▲</span>
                <span className="proscons-card__item-text">{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Desventajas */}
        <div className="proscons-card proscons-card--cons">
          <div className="proscons-card__header">
            <span className="proscons-card__header-icon">⚠️</span>
            <h3 className="proscons-card__header-title">Desventajas</h3>
          </div>
          <ul className="proscons-card__list">
            {current.cons.map((con, index) => (
              <li
                key={index}
                className="proscons-card__item proscons-card__item--con"
                style={{ animationDelay: `${index * 80 + 200}ms` }}
              >
                <span className="proscons-card__item-icon proscons-card__item-icon--con">▼</span>
                <span className="proscons-card__item-text">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProsConsTable
