import React from 'react'
import "./ProjectCard.css"

const ProjectCard = ({ name, link }) => {
  return (
    <div className="project-card" onClick={() => window.open(link, "_blank")}>
      <span>{name}</span>
    </div>
  )
}

export default ProjectCard