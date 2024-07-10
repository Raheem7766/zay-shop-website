import { Box } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Map() {
  return (
    <Box maxWidth='xl' sx={{width:'100%',height:'41vh',backgroundColor:'rgb(221,221,221)',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <LocationOnIcon sx={{fontSize:'38px',color:'rgb(36,125,201)'}}/>
    </Box>
  )
}
