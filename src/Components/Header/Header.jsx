import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/my_professional (1).jpg-HD.png';
import HeaderSocial from './HeaderSocial';


function Headerr() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h2>Abhinav Gupta</h2>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="me">
              <img src={ME} alt="Myprofile" />

            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Headerr