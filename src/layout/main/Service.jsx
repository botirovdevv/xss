import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { serviceData } from '../../data/serviceData'

function Service() {
    useEffect(() => {
        AOS.init({duration: 1800})
    }, [])
  return (
    <section className='service'>
      <div className="container">
          <h1 className='service-title' data-aos="fade-right">Xizmatlar</h1>
            <div className="service-cards">
                {               
                  serviceData.map((item, key) => (
                    <div className='service-card' key={key} data-aos="fade-up">
                      <div className="service-icon">
                        <img src={item.icon} className='service-image' alt="" />
                      </div>
                      <h1 className='service-card__title'>{item.name}</h1>
                      <div className="service-items">
                        <h1 className='service-items__title'>{item.title}</h1>
                      </div>
                        </div>
                  ))
                }
            </div>
      </div>

    </section>

  )
}

export default Service