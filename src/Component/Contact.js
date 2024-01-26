import React from 'react'
import {contact} from "../Portfolio";
import "./Contact.css"

const Contact = () => {
    if(!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
        <h2 className='section__title'>Contact</h2>
        <a href={`mailto:${contact.email}`}>
        <span type="button" className='btn btn--outline'>email me</span>
        </a>
    </section>
  )
}

export default Contact
