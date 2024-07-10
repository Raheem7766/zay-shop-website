import { Box } from '@mui/material'
import React from 'react'
import Nav from './Nav'
import Navbar from './Navbar'
import ShopFeature from './ShopFeature'
import Brands from './Brands'
import Footer from './Footer'

export default function Shop() {
  return (
    <Box>
        <Nav/>
        <Navbar />
        <ShopFeature />
        <Brands />
        <Footer />
    </Box>
  )
}
