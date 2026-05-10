import { useEffect, useRef, useState } from 'react'
import './InventorySection.css'

const inventoryData = [
  { name: 'Srv-01: Aplicación Core', cpu: 'Intel Xeon Silver 4208', ram: '16GB DDR4 ECC', disk: '1TB SSD Enterprise', net: 'Dual 1Gbps RJ45', price: 9500000 },
  { name: 'Srv-02: Base de Datos Pro', cpu: 'Intel Xeon Silver 4210', ram: '16GB DDR4 ECC', disk: '2TB SSD RAID 1', net: 'Dual 1Gbps RJ45', price: 11800000 },
  { name: 'Srv-03: Gestión de Redes', cpu: 'Intel Xeon Bronze 3204', ram: '16GB DDR4 ECC', disk: '500GB SSD', net: 'Quad 1Gbps RJ45', price: 7200000 },
  { name: 'Srv-04: Pruebas (App + DB)', cpu: 'Intel Core i7 (Server Grade)', ram: '8GB DDR4', disk: '500GB SSD', net: 'Dual 1Gbps RJ45', price: 5500000 },
  { name: 'Srv-05: Almacenamiento Doc', cpu: 'Intel Xeon Bronze 3204', ram: '16GB DDR4 ECC', disk: '2TB SSD Enterprise', net: 'Dual 1Gbps RJ45', price: 8900000 },
  { name: 'Cables y Rackmount', cpu: 'Accesorios Networking', ram: 'Cat 6A SFTP', disk: 'UPS 1.5KVA', net: 'Gabinete 22U', price: 4200000 },
]

const formatCOP = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val)

const totalOnPremise = inventoryData.reduce((acc, curr) => acc + curr.price, 0)

const migrationAnalysis = [
  {
    type: 'Migración Total a IaaS',
    icon: '📦',
    recommendation: 'Infraestructura como Servicio',
    cost: 'Gasto Mensual: $6.5M - $8M COP',
    savings: 'Ahorro Inicial (CAPEX): $57M COP',
    pros: 'Control total del sistema operativo. Es la opción más parecida a tener los servidores físicos pero en la nube. Requiere personal técnico para parches y seguridad.',
    color: 'blue'
  },
  {
    type: 'Migración Total a PaaS',
    icon: '🚀',
    recommendation: 'Plataforma como Servicio',
    cost: 'Gasto Mensual: $9M - $11M COP',
    savings: 'Ahorro Operativo: 80% en horas de mantenimiento técnico.',
    pros: 'El proveedor gestiona SO y Bases de Datos. Te olvidas de virus, actualizaciones y fallos de disco. Es la opción más equilibrada en costo/beneficio.',
    color: 'teal',
    recommended: true
  },
  {
    type: 'Migración Total a SaaS',
    icon: '💎',
    recommendation: 'Software como Servicio',
    cost: 'Gasto Mensual: $14M+ COP',
    savings: 'Ahorro Total: Cero inversión en desarrollo o mantenimiento.',
    pros: 'Soluciones listas para usar (ej. ERP en la nube, OneDrive). Es la más cara pero elimina por completo la necesidad de servidores o código propio.',
    color: 'orange'
  }
]

function InventorySection() {
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
    <section className={`inventory-section ${isVisible ? 'inventory-section--visible' : ''}`} id="inventory-section" ref={sectionRef}>
      <div className="inventory-section__header">
        <span className="inventory-section__badge">Caso de Estudio Real</span>
        <h2 className="inventory-section__title">
          Inventario <span className="gradient-text-inv">On-Premises vs Migración</span>
        </h2>
        <p className="inventory-section__description">
          Análisis detallado de 5 servidores físicos y la proyección económica de su migración hacia modelos Cloud.
        </p>
      </div>

      <div className="inventory-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Servidor / Item</th>
              <th>Procesador (CPU)</th>
              <th>Memoria RAM</th>
              <th>Almacenamiento</th>
              <th>Costo Estimado (COP)</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, i) => (
              <tr key={i}>
                <td className="server-name">{item.name}</td>
                <td>{item.cpu}</td>
                <td>{item.ram}</td>
                <td>{item.disk}</td>
                <td className="price-cell">{formatCOP(item.price)}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td colSpan="4">Inversión Inicial Total (CAPEX Local)</td>
              <td className="price-cell">{formatCOP(totalOnPremise)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="analysis-title">Análisis de Estrategia de Migración</h3>
      
      <div className="analysis-grid">
        {migrationAnalysis.map((item, i) => (
          <div key={i} className={`analysis-card ${item.recommended ? 'analysis-card--recommended' : ''}`}>
            {item.recommended && <span className="recommended-badge">Opción Más Rentable</span>}
            <div className="analysis-card__header">
              <span className="analysis-card__icon">{item.icon}</span>
              <span className="analysis-card__type">{item.type}</span>
            </div>
            
            <div className="analysis-item">
              <span className="analysis-item__label">Recomendación</span>
              <span className="analysis-item__value">{item.recommendation}</span>
            </div>

            <div className="analysis-item">
              <span className="analysis-item__label">Gasto Generado</span>
              <span className="analysis-item__value analysis-item__value--cost">{item.cost}</span>
            </div>

            <div className="analysis-item">
              <span className="analysis-item__label">Ahorro Estimado</span>
              <span className="analysis-item__value analysis-item__value--save">{item.savings}</span>
            </div>

            <div className="analysis-item">
              <span className="analysis-item__label">Valor Agregado</span>
              <span className="analysis-item__value">{item.pros}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="best-option-box">
        <h3>🏆 Veredicto del Consultor</h3>
        <p>
          Para esta empresa, la <strong>mejor opción es una Estrategia Híbrida</strong>: Migrar la Aplicación y BD a <strong>PaaS</strong> para eliminar gestión de servidores, y mover el almacenamiento de documentos a <strong>SaaS</strong> (ej. SharePoint/Box). Esto transforma una inversión de <strong>{formatCOP(totalOnPremise)}</strong> en un costo operativo mensual controlado, recuperando la liquidez en menos de 18 meses.
        </p>
      </div>
    </section>
  )
}

export default InventorySection
