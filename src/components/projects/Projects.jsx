import React from 'react'
import "./Projects.css"
import { PROJECTS } from "../../utils/data"
import ProjectCard from './projectCard/ProjectCard'

const Projects = () => {
  return (
    <div className='projects'>
      <h5 className='projects-title'>Projects</h5>
      <p className='project-description'>El proyecto de Gestión de usuario y Notas es una aplicación Full Stack. Debe ingresar con usuario: <span>fsantana</span> y clave <span>0103</span></p>
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} name={project.name} link={project.link} />
        ))}
      </div>
    </div>

  )
}

export default Projects