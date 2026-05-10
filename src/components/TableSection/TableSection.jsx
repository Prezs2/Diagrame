import { useEffect, useRef, useState } from 'react'
import './TableSection.css'

const technicalData = {
  headers: ['Atributo Técnico', 'On-Premises (CapEx)', 'IaaS', 'PaaS', 'SaaS'],
  rows: [
    { 
      feature: 'Control de Infraestructura', 
      col1: 'Total (Hardware y Soft)', 
      col2: 'Total (Servidores/Red)', 
      col3: 'Parcial (Solo App)', 
      col4: 'Nulo (Caja negra)', 
      highlight: true 
    },
    { 
      feature: 'Responsabilidad', 
      col1: 'Total del Usuario', 
      col2: 'Usuario (OS + App)', 
      col3: 'Mixta (App)', 
      col4: 'Proveedor (Todo)', 
      highlight: false 
    },
    { 
      feature: 'Escalabilidad', 
      col1: 'Muy Limitada (Semanas)', 
      col2: 'Manual / Programada', 
      col3: 'Automática (PaaS)', 
      col4: 'Invisible para usuario', 
      highlight: true 
    },
    { 
      feature: 'Personalización', 
      col1: 'Totalmente Libre', 
      col2: 'Sin límites (OS)', 
      col3: 'Limitada a la plataforma', 
      col4: 'Mínima o Nula', 
      highlight: false 
    },
    { 
      feature: 'Tiempo de despliegue', 
      col1: 'Semanas / Meses', 
      col2: 'Alto (Minutos/Horas)', 
      col3: 'Bajo (Segundos/Min)', 
      col4: 'Inmediato', 
      highlight: true 
    },
    { 
      feature: 'Mantenimiento', 
      col1: 'Crítico (Manual)', 
      col2: 'Complejo (Manual)', 
      col3: 'Simplificado', 
      col4: 'Transparente', 
      highlight: false 
    },
  ]
}

const financialData = {
  headers: ['Concepto Económico', 'On-Premise (CAPEX)', 'Cloud (OPEX)'],
  rows: [
    { feature: 'Tipo de gasto', col1: 'Inversión en activos', col2: 'Gasto operativo mensual', highlight: true },
    { feature: 'Impacto inicial', col1: 'Alto', col2: 'Bajo', highlight: false },
    { feature: 'Flujo de caja', col1: 'Menor liquidez', col2: 'Mayor liquidez', highlight: true },
    { feature: 'Renovacion tecnológica', col1: 'Costosa', col2: 'Incluida', highlight: false },
    { feature: 'Escalabilidad', col1: 'Limitada', col2: 'Flexible', highlight: true },
    { feature: 'Riesgo financiero', col1: 'Alto', col2: 'Medio/Bajo', highlight: false },
    { feature: 'Mantenimiento', col1: 'Interno', col2: 'Externalizado', highlight: false },
    { feature: 'Depreciación', col1: 'Sí', col2: 'No', highlight: false },
    { feature: 'Actualización tecnológica', col1: 'Manual', col2: 'Automatica', highlight: false },
    { feature: 'Crecimiento empresarial', col1: 'Mas lento', col2: 'Mas rapido', highlight: false }
  ]
}

const conclusionData = [
  {
    title: 'Agilidad y Velocidad',
    desc: 'El modelo OPEX permite lanzar servicios en minutos en lugar de semanas, eliminando la barrera de adquisición de hardware.',
    icon: '⚡'
  },
  {
    title: 'Eficiencia de Capital',
    desc: 'Se libera flujo de caja al eliminar inversiones iniciales pesadas, permitiendo invertir en el núcleo del negocio.',
    icon: '💰'
  },
  {
    title: 'Riesgo Transferido',
    desc: 'El mantenimiento físico y la disponibilidad recaen en el proveedor, reduciendo el impacto económico de fallas locales.',
    icon: '🛡️'
  }
]

function TableSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('tech')
  const [hoveredRow, setHoveredRow] = useState(null)

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
    <section className={`table-section ${isVisible ? 'table-section--visible' : ''}`} id="table-section" ref={sectionRef}>
      <div className="table-section__header">
        <span className="table-section__badge">Atributos del Servicio</span>
        <h2 className="table-section__title">
          Análisis de <span className="gradient-text-alt">Infraestructura y Finanzas</span>
        </h2>
        <p className="table-section__description">
          Explore las diferencias clave entre modelos tecnológicos y económicos para una toma de decisiones informada.
        </p>
      </div>

      <div className="table-tabs">
        <button className={`table-tab ${activeTab === 'tech' ? 'table-tab--active' : ''}`} onClick={() => setActiveTab('tech')}>Tecnológica</button>
        <button className={`table-tab ${activeTab === 'finance' ? 'table-tab--active' : ''}`} onClick={() => setActiveTab('finance')}>CAPEX vs OPEX</button>
        <button className={`table-tab ${activeTab === 'conclusion' ? 'table-tab--active' : ''}`} onClick={() => setActiveTab('conclusion')}>Conclusión</button>
      </div>

      <div className="table-section__wrapper">
        {activeTab !== 'conclusion' ? (
          <div className={`table-section__table-container table-section__table-container--${activeTab}`}>
            <table className={`comparison-table comparison-table--${activeTab}`}>
              <thead>
                <tr>
                  {(activeTab === 'tech' ? technicalData : financialData).headers.map((header, index) => (
                    <th key={index} className={`comparison-table__th ${index === 0 ? 'comparison-table__th--feature' : ''}`}>
                      {activeTab === 'tech' && index === 1 && <span className="comparison-table__th-icon">🏛️</span>}
                      {activeTab === 'tech' && index === 2 && <span className="comparison-table__th-icon">📦</span>}
                      {activeTab === 'tech' && index === 3 && <span className="comparison-table__th-icon">🚀</span>}
                      {activeTab === 'tech' && index === 4 && <span className="comparison-table__th-icon">💎</span>}
                      {activeTab === 'finance' && index === 1 && <span className="comparison-table__th-icon">🏢</span>}
                      {activeTab === 'finance' && index === 2 && <span className="comparison-table__th-icon">☁️</span>}
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(activeTab === 'tech' ? technicalData : financialData).rows.map((row, index) => (
                  <tr
                    key={index}
                    className={`comparison-table__row ${row.highlight ? 'comparison-table__row--highlight' : ''} ${hoveredRow === index ? 'comparison-table__row--hovered' : ''}`}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="comparison-table__td comparison-table__td--feature">{row.feature}</td>
                    <td className="comparison-table__td comparison-table__td--blue">{row.col1}</td>
                    <td className="comparison-table__td comparison-table__td--teal">{row.col2}</td>
                    {row.col3 && <td className="comparison-table__td comparison-table__td--orange">{row.col3}</td>}
                    {row.col4 && <td className="comparison-table__td comparison-table__td--emerald">{row.col4}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="conclusion-grid">
            {conclusionData.map((item, i) => (
              <div key={i} className="conclusion-card">
                <span className="conclusion-card__icon">{item.icon}</span>
                <h3 className="conclusion-card__title">{item.title}</h3>
                <p className="conclusion-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default TableSection
