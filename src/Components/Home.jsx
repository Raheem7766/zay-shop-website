import React from 'react'
import Nav from "./Nav"
import Navbar from './Navbar';
import Main from './Main';
import Card from './Card';
import Feature from './Feature';
import Footer from './Footer';
function Home() {
  return (
    <div>
      <Nav />
      <Navbar />
      <Main />
      <Card />
      <Feature />
      <Footer />
    </div>
  )
}

export default Home