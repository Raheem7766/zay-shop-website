import { Box } from '@mui/material'
import React from 'react'
import Nav from './Nav'
import Navbar from './Navbar'
import ContactUs from './ContactUs'
import Map from "./Map"
import Form from './Form'
import Footer from './Footer'

export default function Contact() {
    return (
        <Box >
            <Nav />
            <Navbar />
            <ContactUs/>
            <Map/>
            <Form/>
            <Footer />
        </Box>
    )
}
