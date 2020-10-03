import React from 'react';
import './style.css'
import Navbar from './Navbar'
import HeroSection from './HeroSection';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Footer from './Footer';


const App = ()=>{
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;