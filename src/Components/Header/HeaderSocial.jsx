import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function HeaderSocial() {
  return (
    <div className='header__social'>
        <a href="https://github.com/coolbeangeeks"><FaLinkedin/></a>
        <a href="https://www.linkedin.com/in/abhinav-gupta-b33126220/"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial