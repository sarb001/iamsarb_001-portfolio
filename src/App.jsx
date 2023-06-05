import { useState } from 'react'
import { Button } from '@mui/material';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
       <Navbar />
    <div className="App" style = {{margin:'1% 1%',zIndex:'-1'}}>
         <Home />
         <About />
         <Skills />
         <Work />
         <Contact />
    </div>
    </BrowserRouter>
  )
}

export default App
