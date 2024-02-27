import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillsCard from './skillsCard/SkillsCard'
import SkillsInfoCard from './skillsInfoCard/SkillsInfoCard'

const Skills = () => {

  const [selectedSkill, setselectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setselectedSkill(data);
  };

  return (
    <section className='skills_container'>
      <h5>Technical Proficiency</h5>
      <div className="skills__content">
        <div className='skills'>
          {SKILLS.map((item) => (
            <SkillsCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills__info">
            <SkillsInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills} />
        </div>
      </div>
    </section>
  )
}

export default Skills