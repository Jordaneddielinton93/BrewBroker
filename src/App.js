
import './App.css';
import React, { useEffect } from "react";
import Hero from './components/02-Hero/Hero';
import NavBar from './components/01-NavBar/NavBar';
import Carousel from './components/03-Carousel/Carousel';
import Video from './components/04-Video/Video';
import Boxs from './components/05-Boxs/Box';
import Img1 from "./components/Images/cans.png"
import Img2 from "./components/Images/beerBottle.png"
import Img3 from "./components/Images/grain.png"
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {

  useEffect(()=>{
    Aos.init({duration:1000})
  })


  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Carousel/>
      <Video/>
      <Boxs fadedirect="left"
      direction="row-reverse" images={Img1} leftright="right"/>
      <Boxs fadedirect="right"  
      direction="row" images={Img2} leftright="right"/>
      <Boxs fadedirect="left"
      direction="row-reverse" images={Img3} leftright="left"/>
      <Boxs fadedirect="right"
       direction="row"/>
      <Carousel/>

      
    </div>
  );
}

export default App;
