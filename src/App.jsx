import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Headerr from "./Components/Header/Header";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import Certificates from "./Components/Certification/Certificates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App=()=>{
    return(
        <>
        <Headerr/>
        <Navbar/>
        <About/>
        <Experience/>
        
        <Certificates/>
        <Project/>
        <Contact/>
        <Footer/>

        </>
)
}
export default App;