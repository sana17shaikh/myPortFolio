import React from 'react'
import { about } from '../Portfolio'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import './About.css'

const About = () => {
    const {photo,name,role,description,resume,social} = about
  return (
    <div className='about center'>
      {photo && (
        <img height="300px" alt='Avatar' src={photo}/>
      )}
      {name && (
        <h1>
            Hi, I am <span className='about__name'>{name}</span>
        </h1>
      )}
      {role && 
        <h2 className='about__role'>
            A {role}
        </h2>
      }
      <p className='about__description'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
            <a href={resume}>
                <span type="button" className='btn btn--outline'>
                    Resume
                </span>
            </a>
        )}

        {social.github && (
            <a href={social.github}
            aria-label='github'
            className='link link--icon'>
                <GitHubIcon/>
            </a>
        )}

        {social.linkedin && (
            <a href={social.linkedin}
            aria-label='linkedin'
            className='link link--icon'>
                <LinkedInIcon/>
            </a>
        )}
      </div>
    </div>
  )
}

export default About
