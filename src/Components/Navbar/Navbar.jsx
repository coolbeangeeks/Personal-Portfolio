import React from 'react'
import './Navbar.css'
import { AiOutlineHome } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { useState } from 'react';
function Navbar() {
  const [activNav,setactivNav]=useState('#');
  return (
    
    <nav>
      <a href="#" onClick={()=>setactivNav('#')}className={activNav==='#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setactivNav('about')}className={activNav==='#about' ? 'active':''}><CiUser/></a>
      <a href="#project" onClick={()=>setactivNav('#project')}className={activNav==='#project' ? 'active':''}><AiFillGithub/></a>
      <a href="#experience" onClick={()=>setactivNav('#experience')}className={activNav==='#experience' ? 'active':''}><CiBookmark/></a>
      <a href="#contact" onClick={()=>setactivNav('#contact')}className={activNav==='#contact' ? 'active':''}><FiMessageSquare/></a>


    </nav>
  )
}

export default Navbar