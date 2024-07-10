import { Box, Typography } from '@mui/material'
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PercentIcon from '@mui/icons-material/Percent';
import PersonIcon from '@mui/icons-material/Person';

export default function Our() {
    return (
        <Box maxWidth='xl' sx={{ height: 'auto', width: '100%',padding:'1px',paddingBottom:'95px' }}>
            <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '150px' }, width: '100%', padding: '1px', marginTop: { xs: '35px', lg: '75px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h2' sx={{ fontSize: { xs: '42px', sm: '42px', lg: '48px' }, fontWeight: '200', color: 'rgb(81,84,87)', marginTop: '15px', textAlign: 'center' }}>
                    Our Service
                </Typography>
                <Box sx={{ width: { xs: '100%', md: '100%', lg: '657px' }, height: 'auto', padding: '1px', textAlign: 'center' }}>
                    <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '400', color: 'rgb(81,84,87)', marginTop: '2px', width: '100%', textAlign: 'center' }} >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.                    </Typography>
                </Box>
            </Box>
            <Box sx={{ height: 'auto', width: {xs:'95%',sm:'85.2%',md:'85.2%',lg:'85.2%'},padding:'1px', margin: 'auto', marginTop: '22px', display: 'flex', justifyContent: 'space-between',flexWrap:{xs:'wrap',sm:'no-wrap',md:'no-wrap',lg:'no-wrap'} }}>
                <Box sx={{ height: '208px', width: {xs:'100%',sm:'45%',md:'45%',lg:'23.5%'},padding:'1px', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: '20px' }}>
                    <LocalShippingIcon sx={{ fontSize: '88px', color: 'rgb(89,171,110)' }} />
                    <Typography variant='h2' sx={{ fontSize: '20px', fontWeight: '500', color: 'black', marginTop:'10px' }}>
                        Delivery Services
                    </Typography>
                </Box>
                <Box sx={{ height: '208px', width: {xs:'100%',sm:'45%',md:'45%',lg:'23.5%'},padding:'1px', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: '20px',marginTop:{xs:'20px',sm:'0px',md:'0',lg:'0'} }}>
                    <SyncAltIcon sx={{ fontSize: '88px', color: 'rgb(89,171,110)' }} />
                    <Typography variant='h2' sx={{ fontSize: '20px', fontWeight: '500', color: 'black', marginTop:'10px' }}>
                        Shipping & Return
                    </Typography>
                </Box>
                <Box sx={{ height: '208px', width: {xs:'100%',sm:'45%',md:'45%',lg:'23.5%'},padding:'1px', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: '20px',marginTop:{xs:'20px',md:'20px',lg:'0'} }}>
                    <PercentIcon sx={{ fontSize: '88px', color: 'rgb(89,171,110)' }} />
                    <Typography variant='h2' sx={{ fontSize: '20px', fontWeight: '500', color: 'black', marginTop:'10px' }}>
                        Promotion
                    </Typography>
                </Box>
                <Box sx={{ height: '208px', width: {xs:'100%',sm:'45%',md:'45%',lg:'23.5%'},padding:'1px', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: '20px',marginTop:{xs:'20px',md:'20px',lg:'0'} }}>
                    <PersonIcon sx={{ fontSize: '88px', color: 'rgb(89,171,110)' }} />
                    <Typography variant='h2' sx={{ fontSize: '20px', fontWeight: '500', color: 'black', marginTop:'10px' }}>
                        24 Hours Service
                    </Typography>
                </Box>

            </Box>

        </Box>
    )
}
