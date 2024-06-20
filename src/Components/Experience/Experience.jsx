import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
              

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
              

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>

              </div>
             

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>

              </div>
              

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>

              </div>
              

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>JEST</h4>
              <small className='text-light'>Experienced</small>


              </div>
              
            </article>
          </div>

        </div>
        <div className="experience__developer__tools">
          <h3>Developer Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>Git/Github</h4>
              <small className='text-light'>Experienced</small>

              </div>
              

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>Vs code</h4>
              <small className='text-light'>Experienced</small>

              </div>
              

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>Chrome Dev Tools</h4>
              <small className='text-light'>Experienced</small>

              </div>
              

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>Parcel</h4>
              <small className='text-light'>Experienced</small>

              </div>
              

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icons'/>
              <div>
              <h4>Package Manager</h4>
              <small className='text-light'>Experienced</small>

              </div>
              

            </article>
          </div>

        </div>


      </div>
    </section>
  )
}

export default Experience