import React from 'react'
import { infoData } from '../../data/infoData'

function Info() {
  return (
    <section className="info">
      <div className="container">
        <h1 className="info-title">Nima uchun mijozlar bizni tanlaydilar?</h1>
        <div className="info-cards">
          {
            infoData.map((item, key) => (
              <div className="info-card" key={key}>
                <span className='info-icon'>
                  <img src={item.img} className='info-image' alt={item.id} />
                </span>
                <div className="info-text">
                  <h1 className='info-card_title'>{item.title}</h1>
                  <p className="info-subtitle">{item.subtitle}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Info