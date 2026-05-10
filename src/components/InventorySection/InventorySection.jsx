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
    type: 'IaaS',
    icon: '📦',
    recommendation: 'Recomendado para Srv-03 y Srv-04',
    cost: 'Pago por uso ($1.2M - $1.8M COP /mes)',
    savings: 'Ahorro de $15M en inversión inicial y $300k mensuales en luz.',
    pros: 'Migración rápida de máquinas virtuales existentes sin cambios de código.',
    color: 'blue'
  },
  {
    type: 'PaaS',
    icon: '🚀',
    recommendation: 'Ideal para Srv-01 y Srv-02',
    cost: 'Suscripción gestionada ($2.2M - $3.5M COP /mes)',
    savings: 'Ahorro de $21M iniciales y 40 horas/mes de soporte técnico.',
    pros: 'Cero mantenimiento de parches, backups automáticos y escalado elástico.',
    color: 'teal',
    recommended: true
  },
  {
    type: 'SaaS',
    icon: '☁️',
    recommendation: 'Excelente para Srv-05',
    cost: 'Suscripción por Licencia (~$1.5M COP /mes)',
    savings: 'Ahorro de $8.9M iniciales y riesgo nulo de pérdida de datos.',
    pros: 'Colaboración en tiempo real, búsqueda inteligente y seguridad integrada.',
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
