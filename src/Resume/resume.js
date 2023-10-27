import React from 'react'
import Header from '../Header/header'
import Summary from '../Summary/summary'
import Experience from '../Experience/experience'
import Education from '../Education/education'
import Skills from '../Skills/skills'
import Projects from '../Projects/projects'
import Contact from '../Contact/contact'

function resume() {
  return (
    <div className='resume'>
        <Header/>
        <Summary/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default resume