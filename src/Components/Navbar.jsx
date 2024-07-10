import { Box, Hidden } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Box maxWidth="xxl" sx={{ width: '100%', height: '91px', backgroundColor: 'white', padding: '1px',boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}>
            <Box sx={{ width: '86%', height: '100%', padding: '1px', margin: 'auto', alignItems: 'center', display: { xs: 'flex', md: 'flex' }, justifyContent: { xs: 'space-between', md: 'space-between' } }}>
                <Box sx={{ height: '100%', width: '100px', padding: '1px', fontSize: '48px', fontWeight: '500', color: 'RGB(89, 171, 110)', cursor: 'pointer', paddingTop: '3px' }}>Zay</Box>
                <Box sx={{ height: '50%', width: '81.3%', padding: '1px', display: { xs: 'none', md: 'flex' } }}>
                    <Box sx={{ height: '100%', width: { md: '450px', lg: '552px' }, padding: '1px', margin: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: "space-between", alignItems: 'center', ":hover": { backgroundColor: 'transparent' } }}>
                        <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', cursor: 'pointer', ":hover": { color: 'rgb(89,171,110)' } }}>
                            <Link style={{ textDecoration: 'none', fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', cursor: 'pointer', ":hover": { color: 'rgb(89,171,110)' } }} to={'/'}>Home</Link>
                        </Typography>
                        <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '400', color: 'RGB(33, 37, 41)', cursor: 'pointer', ":hover": { color: 'rgb(89,171,110)' } }}>
                            <Link style={{ textDecoration: 'none', fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', cursor: 'pointer', ":hover": { color: 'rgb(89,171,110)' } }} to={'/about'}>About</Link>
                        </Typography>
                        <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '400', color: 'RGB(33, 37, 41)', cursor: 'pointer', ":hover": { color: 'rgb(89,171,110)' } }}>
                            <Link style={{ textDecoration: 'none', fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', cursor: 'pointer', ":hover": { color: 'rgb(89,171,110)' } }} to={'/shop'}>Shop</Link>
                        </Typography>
                        <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '400', color: 'RGB(33, 37, 41)', cursor: 'pointer', ":hover": { color: 'rgb(89,171,110)' } }}>
                            <Link style={{ textDecoration: 'none', fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', cursor: 'pointer', ":hover": { color: 'rgb(89,171,110)' } }} to={'/contact'}>Contact</Link>
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ height: '100%', width: '146px', padding: '1px', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Hidden mdDown >
                        <Box sx={{ height: '100%', width: '146px', padding: '1px', fontSize: '18px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingRight: '30px' }} >
                            <SearchIcon sx={{ display: { sx: 'none', md: 'block' } }} />
                            <ShoppingCartIcon />
                            <Person2Icon />
                        </Box>
                    </Hidden>
                    <DensityMediumIcon sx={{ display: { sx: 'block', md: 'none' } }} />
                </Box>
            </Box>
        </Box>
    )
}
