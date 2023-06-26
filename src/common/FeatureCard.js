import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({ header, desc, icon, classes }) => {
  return (
    <div className={`feature-card ${classes}`}>
      <div className='text-container'>
        <p>{header}</p>
        <p>{desc}</p>
      </div>

      <div className='icon-container'>
        <div className='divider'></div>
        <img src={icon} alt='icon' />
      </div>
    </div>
  )
}

export default FeatureCard
