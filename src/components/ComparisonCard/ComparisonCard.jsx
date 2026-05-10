import { useState } from 'react'
import './ComparisonCard.css'

function ComparisonCard({ data, delay }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className={`comparison-card comparison-card--${data.color}`}
      id={data.id}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`comparison-card__glow comparison-card__glow--${data.color}`}></div>

      {/* Top accent bar */}
      <div className={`comparison-card__accent comparison-card__accent--${data.color}`}></div>

      <div className="comparison-card__content">
        {/* Icon */}
        <div className={`comparison-card__icon-wrapper comparison-card__icon-wrapper--${data.color}`}>
          <span className="comparison-card__icon">{data.icon}</span>
        </div>

        {/* Title */}
        <h2 className="comparison-card__title">{data.title}</h2>
        <span className={`comparison-card__subtitle comparison-card__subtitle--${data.color}`}>
          {data.subtitle}
        </span>

        {/* Features list */}
        <ul className="comparison-card__features">
          {data.features.map((feature, index) => (
            <li
              key={index}
              className="comparison-card__feature"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className={`comparison-card__feature-dot comparison-card__feature-dot--${data.color}`}></span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Stat */}
        <div className="comparison-card__stat">
          <span className={`comparison-card__stat-value comparison-card__stat-value--${data.color}`}>
            {data.stat}
          </span>
          <span className="comparison-card__stat-label">{data.statLabel}</span>
        </div>
      </div>

      {/* Animated border */}
      <div className={`comparison-card__border-glow ${isHovered ? 'comparison-card__border-glow--active' : ''}`}></div>
    </article>
  )
}

export default ComparisonCard
