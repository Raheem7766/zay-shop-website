import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ContactUs() {
    return (
        <Box maxWidth='xl' sx={{width:'100%',height:'auto',backgroundColor:'rgb(214,218,225)',padding:'1px',paddingBottom:{xs:'75px',sm:'75px',md:'30px'},lg:'30px'}}>
            <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '150px' }, width: '100%', padding: '1px', marginTop: { xs: '55px',md:'50px', lg: '50px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='h2' sx={{ fontSize: { xs: '42px', sm: '42px',md:'48px', lg: '48px' }, fontWeight: '200', color: 'rgb(81,84,87)', textAlign: 'center' }}>
            Contact Us
          </Typography>
          <Box sx={{ width: { xs: '100%', sm: '100%',md:'780px', lg: '780px' }, height: 'auto', padding: '1px', textAlign: 'center' }}>
            <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '400', color: 'rgb(81,84,87)', marginTop: '2px', width: '100%', textAlign: 'center' }} >
            Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.            </Typography>
          </Box>
        </Box>

        </Box>
    )
}
