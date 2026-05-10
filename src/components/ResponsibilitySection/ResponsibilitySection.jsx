import { useEffect, useRef, useState } from 'react'
import './ResponsibilitySection.css'

const respData = {
  layers: [
    { name: 'Datos y Contenido', iaas: 'user', paas: 'user', saas: 'user' },
    { name: 'Aplicaciones', iaas: 'user', paas: 'user', saas: 'provider' },
    { name: 'Runtime / Librerías', iaas: 'user', paas: 'provider', saas: 'provider' },
    { name: 'Sistema Operativo', iaas: 'user', paas: 'provider', saas: 'provider' },
    { name: 'Virtualización', iaas: 'provider', paas: 'provider', saas: 'provider' },
    { name: 'Hardware / Red', iaas: 'provider', paas: 'provider', saas: 'provider' },
    { name: 'Instalaciones Físicas', iaas: 'provider', paas: 'provider', saas: 'provider' },
  ]
}

function ResponsibilitySection() {
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
    <section className={`responsibility-section ${isVisible ? 'responsibility-section--visible' : ''}`} id="responsibility-section" ref={sectionRef}>
      <div className="responsibility-section__header">
        <span className="responsibility-section__badge">Responsabilidad Compartida</span>
        <h2 className="responsibility-section__title">
          ¿Quién gestiona <span className="gradient-text-resp">Qué?</span>
        </h2>
        <p className="responsibility-section__description">
          Distribución de responsabilidades entre el cliente (Tú) y el proveedor de nube para cada capa tecnológica.
        </p>
      </div>

      <div className="responsibility-table-wrapper">
        <table className="responsibility-table">
          <thead>
            <tr>
              <th>Capa Tecnológica</th>
              <th>IaaS</th>
              <th>PaaS</th>
              <th>SaaS</th>
            </tr>
          </thead>
          <tbody>
            {respData.layers.map((layer, index) => (
              <tr key={index}>
                <td className="resp-layer-name">{layer.name}</td>
                <td><span className={`resp-badge resp-badge--${layer.iaas}`}>{layer.iaas === 'user' ? 'Tú' : 'Proveedor'}</span></td>
                <td><span className={`resp-badge resp-badge--${layer.paas}`}>{layer.paas === 'user' ? 'Tú' : 'Proveedor'}</span></td>
                <td><span className={`resp-badge resp-badge--${layer.saas}`}>{layer.saas === 'user' ? 'Tú' : 'Proveedor'}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="responsibility-legend">
        <div className="legend-item"><span className="legend-dot legend-dot--user"></span> Tú gestionas</div>
        <div className="legend-item"><span className="legend-dot legend-dot--provider"></span> Proveedor gestiona</div>
      </div>
    </section>
  )
}

export default ResponsibilitySection
