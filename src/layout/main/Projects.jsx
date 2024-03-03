import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

function Projects() {
  useEffect(() => {
    AOS.init({duration: 1800})
  }, [])
  return (
    <section className="projects">
      <div className="container">
        <h1 className="projects-title" data-aos="fade-up">Loyihalar</h1>
        <span className='projects-line'></span>
      </div>
    </section>
  )
}

export default Projects