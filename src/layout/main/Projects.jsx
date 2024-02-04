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
        <h1 className="service-title" data-aos="fade-up">So'ngi loyihalar</h1>
        <span className='service-title'>Tez orada....</span>
      </div>
    </section>
  )
}

export default Projects