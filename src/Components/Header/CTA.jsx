import React from 'react'
import av from '../../assets/ab.pdf';

function CTA() {
  return (
    <div className="cta">
        <a href={av} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA