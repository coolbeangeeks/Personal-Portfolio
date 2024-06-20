import React from 'react'
import './About.css';
import me from '../../assets/squareme.png'
import { FaAward } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="Aboutme" />

          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>
            <article className='about__card'>
              <FaGithub className='about__icon'/>
              <h5>Project</h5>
              <small>20+ diffrent Project</small>
            </article>
          </div>
          <p>I'm a dedicated and aspiring front-end developer  . With a strong foundation in REACT,  JavaScript, HTML ,CSS. I'm eager to tackle web development 
projects. Although I may lack extensive professional experience, my passion and commitment shine through, ensuring visually stunning and user-
friendly websites. Let's embark on this journey together and create remarkable digital experiences!</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About