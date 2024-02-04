import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Arrow from '../../assets/icons/ArrrowWhite'
import headerImg from '../../assets/images/header-image.png'

function Header() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
  return (
    <section className='header'>
        <div className="container">
            <div className='header-items'>
                <div>
                    <h3 className='header-text' data-aos="fade-up">Ajoyib mahsulot buyuk jamoalar tomonidan qurilgan</h3>
                    <p className='header-subtitle' data-aos="fade-right">biz sizga biznesingizni avtomatlashtirishga yordam beramiz biz bilan hamkorlikni boshlang va biznesingizni keyingi bosqichga olib chiqing</p>
                    <a href="#" className='header-link'>Loyihani boshlash <Arrow/> </a>
                </div>

                <div className="header-image">
                    <img src={headerImg} data-aos="fade-down" className='header-img' alt="photo" />
                </div>
                {/* <div className="header-info">
                    <h1 className='header-info_text' >
                    We think {' '}
                    <span className='header-writer'>
                        <Typewriter
                            words={['value', 'new', 'future']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    </h1>
                    <button className="header-btn">Get in touch</button>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Header