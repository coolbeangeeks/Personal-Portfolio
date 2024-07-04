import React from 'react'
import './Project.css'
import img1 from '../../assets/portfolio 1.png'
import img2 from '../../assets/potfolio 2.png'
import img3 from '../../assets/portfolio 3.png'
import img4 from '../../assets/portfolio 4.png'

function Project() {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container container__project">
        <article className='project__item'>
          <div className="portfolio__image">
            <img src={img1} alt="" />
          </div>
          <h3>Movie box: An Movies collection and suggestion with chatgpt</h3>
          <div className="project__item__CTA">
          <a href="https://github.com/coolbeangeeks/movie-box" className='btn'>Github</a>
          <a href="https://github.com/coolbeangeeks/movie-box" className='btn btn-primary' target='_blank'  rel="noopener noreferrer"> Live Demo</a>

          </div>
          
        </article>
        <article className='project__item'>
          <div className="portfolio__image">
            <img src={img2} alt="" />
          </div>
          <h3>Bankist is a fictional and minimalistic online banking application.</h3>
          <div className="project__item__CTA">
          <a href="https://github.com/coolbeangeeks/Bankist-App" className='btn'>Github</a>
          <a href="https://bankist-bank.vercel.app/" className='btn btn-primary' target='_blank'  rel="noopener noreferrer">Live Demo</a>

          </div>
          
        </article>
        <article className='project__item'>
          <div className="portfolio__image">
            <img src={img3} alt="" />
          </div>
          <h3>Social media App like and Instragram</h3>
          <div className="project__item__CTA">
          <a href="https://github.com/coolbeangeeks" className='btn'>Github</a>
          <a href="https://connectify-f27ca.web.app/" className='btn btn-primary' target='_blank'  rel="noopener noreferrer">Live Demo</a>

          </div>
          
        </article>
        <article className='project__item'>
          <div className="portfolio__image">
            <img src={img4} alt="" />
          </div>
          <h3>An Ecommerce website to browse and purcharse cloth</h3>
          <div className="project__item__CTA">
          <a href="https://github.com/coolbeangeeks/Shopping-Cart" className='btn'>Github</a>
          <a href="https://coolbeangeeks.github.io/Shopping-Cart/" className='btn btn-primary' target='_blank'  rel="noopener noreferrer">Live Demo</a>

          </div>
          
        </article>
        
      </div>
    </section>
  )
}

export default Project