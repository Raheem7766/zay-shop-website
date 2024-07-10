import { Box } from '@mui/material'
import React from 'react'
import Formcomp from './Formcomp'

export default function Form() {
    return (
        <Box maxWidth='xl' sx={{ width: '100%', height: '92vh',padding:'1px' }}>
            <Box sx={{width:{xs:'95%',sm:'95%',md:'990px'},lg:'990px',padding:'1px',margin:'auto',marginTop:'95px'}}>
                <Formcomp />
            </Box>
        </Box>
    )
}
