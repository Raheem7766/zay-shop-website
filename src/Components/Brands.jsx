import { Box, Typography } from '@mui/material'
import React from 'react'
import img from './Imgs/brand_01.png'
import img1 from './Imgs/brand_02.png'
import img2 from './Imgs/brand_03.png'
import img3 from './Imgs/brand_04.png'

export default function Brands() {
    return (
        <Box maxWidth='xl' sx={{ width: "100%", height: 'auto', backgroundColor: 'rgb(233,238,245)', padding: '1px', paddingBottom: { xs: '110px', md: '110px', lg: '83px' } }}>
            <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '150px' }, width: '100%', marginTop: { xs: '55px', lg: '75px' }, padding: '1px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h2' sx={{ fontSize: { xs: '42px', sm: '42px', lg: '48px' }, fontWeight: '200', color: 'rgb(81,84,87)', marginTop: '15px', textAlign: 'center' }}>
                    Our Brands
                </Typography>
                <Box sx={{ width: { xs: '100%', md: '100%', lg: '657px' }, height: 'auto', padding: '1px', textAlign: 'center', marginTop: "5px" }}>
                    <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '400', color: 'rgb(81,84,87)', marginTop: '10px', width: '100%', textAlign: 'center' }} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: { xs: "90%", sm: '70%', md: '70%', lg: '54%' }, padding: '1px', margin: 'auto', display: 'flex', marginTop: { xs: '30px', md: '30px', lg: '0' } }}>
                <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '167px' }, width: '25%', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={img} width="55%" alt="" />
                </Box>
                <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '167px' }, width: '25%', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={img1} width="55%" alt="" />
                </Box>
                <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '167px' }, width: '25%', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={img2} width="55%" alt="" />
                </Box>
                <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '167px' }, width: '25%', padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={img3} width="55%" alt="" />
                </Box>

            </Box>
        </Box>
    )
}
