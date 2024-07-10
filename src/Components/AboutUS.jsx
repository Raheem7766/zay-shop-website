import { Box, Typography } from '@mui/material'
import React from 'react'
import img from "./Imgs/about-hero.svg"

export default function AboutUS() {
    return (
        <Box maxWidth="xl" sx={{ width: '100%', height: {xs:'auto',md:'auto',lg:"82.2vh"}, backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom:{xs:'100px',md:'100px',lg:'0'} }}>
            <Box sx={{ width: {xs:'95%',sm:'65%',md:'86%',lg:'86%'}, height: '84%', padding:'1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row', lg: 'row'}, paddingRight: {xs:"0",md:'0',lg:'20px'} }}>
                <Box sx={{ width: {xs:'100%',md:'100%',lg:'67%'}, height: 'auto' ,padding:'1px', paddingBottom: '20px',marginTop:{xs:'95px',md:'95px',lg:'0'} }}>
                    <Typography variant='h2' sx={{ fontSize: {xs:'26px',md:'26px',lg:'40px'}, fontWeight: '500', color: 'white' }}>
                        About Us
                    </Typography>
                    <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '400', color: 'white' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </Box>
                <Box sx={{ width: {xs:'100%',md:'100%',lg:'32%'}, padding:'1px', height: 'max-content' }}>
                    <img src={img} alt="" />
                </Box>
            </Box>
        </Box>
    )
}
