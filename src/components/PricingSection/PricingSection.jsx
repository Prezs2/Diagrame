import { useEffect, useRef, useState } from 'react'
import './PricingSection.css'

const pricingData = {
  headers: ['Modelo', 'IaaS', 'PaaS', 'SaaS'],
  rows: [
    {
      feature: 'Base de Cobro',
      col1: 'Recursos (CPU, RAM, Disco)',
      col2: 'Capacidad y Tiempo',
      col3: 'Licencia / Usuario',
    },
    {
      feature: 'Frecuencia',
      col1: 'Por segundo o minuto',
      col2: 'Mensual / Por uso',
      col3: 'Mensual o Anual',
    },
    {
      feature: 'Costos Ocultos',
      col1: 'Transferencia de datos',
      col2: 'Servicios adicionales',
      col3: 'Funciones Premium',
    },
    {
      feature: 'Compromiso',
      col1: 'Instancias On-Demand',
      col2: 'Planes por niveles',
      col3: 'Suscripción fija',
    },
    {
      feature: 'Escalabilidad',
      col1: 'Manual / Pago x uso',
      col2: 'Auto-scaling incluido',
      col3: 'Ajuste de plan inmediato',
    }
  ]
}

function PricingSection() {
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
    <section className={`pricing-section ${isVisible ? 'pricing-section--visible' : ''}`} id="pricing-section" ref={sectionRef}>
      <div className="pricing-section__header">
        <span className="pricing-section__badge">Costos de Mercado</span>
        <h2 className="pricing-section__title">
          Modelos de <span className="gradient-text-pricing">Precios</span>
        </h2>
        <p className="pricing-section__description">
          Comparativa de las estructuras de facturación y cobro para cada arquitectura de servicio.
        </p>
      </div>

      <div className="pricing-section__table-wrapper">
        <table className="pricing-table">
          <thead>
            <tr>
              {pricingData.headers.map((h, i) => (
                <th key={i} className={i === 0 ? 'pricing-table__th--feature' : ''}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingData.rows.map((row, index) => (
              <tr key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <td className="pricing-table__td--feature">{row.feature}</td>
                <td><span className="pricing-tag pricing-tag--blue">{row.col1}</span></td>
                <td><span className="pricing-tag pricing-tag--teal">{row.col2}</span></td>
                <td><span className="pricing-tag pricing-tag--orange">{row.col3}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PricingSection
