import React from 'react'
import './Contact.css';
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
  .sendForm('service_7x94c5g', 'template_5x7dzrp', form.current,'vZ_Km2Lzn9qk9W1Fl',
  )
  e.target.reset()

  }

  
  
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoMdMail className='icon'/>
            <h4>Email</h4>
            <h5>abhigupta96677@gmail.com</h5>
            <a href="mailto:abhigupta96677@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className='icon'/>
            <h4>Linkedin</h4>
            <h5>Abhinav Gupta</h5>
            <a href="https://www.linkedin.com/in/abhinav-gupta-b33126220/" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
         <IoLogoWhatsapp className='icon'/>
            <h4>Whatsapp</h4>
            <h5>9667769603</h5>
            <a href="https://wa.me/9667769603" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form}
        onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full Name' id="" required />
          <input type="email" name="email" placeholder='Your Email' required id="" />
          <textarea name="message" id="" rows="7" placeholder='Your Message'></textarea>
          <button type="submit" className='btn btn-primary'>Send Message

</button>
        </form>
      </div>

    </section>
  )
}

export default Contact