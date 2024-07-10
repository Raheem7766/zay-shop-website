import { Box } from '@mui/material'
import React from 'react'
import UncontrolledExample from './Slider'

export default function Main() {
    return (
        <Box maxWidth= "xxl" sx={{width:'100%',height:'92.5vh',padding:'1px', backgroundColor:'rgb(239,239,239)'}}>
            <UncontrolledExample />
        </Box>
    )
}
