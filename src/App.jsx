import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Headerr from "./Components/Header/Header";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


const App=()=>{
    return(
        <>
        <Headerr/>
        <Navbar/>
        <About/>
        <Experience/>
        <Project/>
        <Testimonial/>
        <Contact/>
        <Footer/>

        </>
)
}
export default App;