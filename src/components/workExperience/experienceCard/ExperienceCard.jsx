import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({ details }) => {
  return (
    <div className="work__experience-card">
        <h6>{details.title}</h6>
        <div className="work__duration">{details.date}</div>
        <ul>
            {details.responsabilities.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceCard