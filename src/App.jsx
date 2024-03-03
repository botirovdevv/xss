import React from 'react'
import Service from './layout/main/Service'
import Navbar from './layout/header/Navbar'
import Header from './layout/header/Header'
import Info from './layout/main/Info'
import Deliver from './layout/main/Deliver'
import Projects from './layout/main/Projects'
import Contact from './layout/main/Contact'
import Footerr from './layout/footer/Footerr'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Service/>
      <Projects/>
      <Info/>
      {/* <Deliver/> */}
      {/* <Contact/> */}
      {/* <Footerr/> */}
    </div>
  )
}

export default App