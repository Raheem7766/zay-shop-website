import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Shop from "./Components/Shop"
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <About /> */}
    </>
  )
}
