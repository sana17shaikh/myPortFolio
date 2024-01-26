import React from 'react'
import './ProjectContainer.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

const ProjectContainer = ({project}) => {
  return (
    <div className='project'>
      <h3>{project.name}</h3>
      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>{[project.stack].map((item,index) => (
          <li key={index} className='project__stack-item'>{item}</li>
        ))}</ul>
      )}
      {project.sourceCode && (
        <a href={project.sourceCode} aria-label='source code' className='link link--icon'><GitHubIcon/></a>
      )}
      {project.livePreview && (
        <a href={project.livePreview} aria-label='live preview' className='link link--icon'><LaunchIcon/></a>
      )}
    </div>
  )
}

export default ProjectContainer
