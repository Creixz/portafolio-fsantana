import React from 'react'
import './SkillsInfoCard.css'

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills__info-card">
        <h6>{heading}</h6>
        <div className="skills__info-content">
            {skills.map((item, index) => (
                <React.Fragment key={`skill_${index}`}>
                    <div className="skill__info">
                        <p>{item.skill}</p>
                        <p className='percentage'>{item.percentage}</p>
                    </div>
                    <div className="skill__progress-bg">
                        <div className="skill__progress" style={{ width: item.percentage }}/>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SkillsInfoCard