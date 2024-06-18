import React from 'react'
import './Header.css'
import CTA from './CTA'

function Headerr() {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h2>Abhinav Gupta</h2>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA/>
        </div>
    </header>
  )
}

export default Headerr