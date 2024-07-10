import { Box, Typography } from '@mui/material'
import React from 'react'
import img from "./Imgs/feature_prod_01.jpg"
import img1 from "./Imgs/feature_prod_02.jpg"
import img2 from "./Imgs/feature_prod_03.jpg"
import StarIcon from '@mui/icons-material/Star';


export default function Feature() {
    return (
        <Box maxWidth='xl' sx={{ height: "max-content", width: '100%',padding:'1px', backgroundColor: 'rgb(233,238,245)',paddingBottom:'70px'}}>
            <Box sx={{ height: 'auto', width: '85.5%', padding:'1px', margin: 'auto' }}>
                <Box sx={{ height: 'auto', width: '100%',paddingBottom:'30px', padding:'1px', marginTop: { xs: '35px', lg: '50px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h2' sx={{ fontSize: { xs: '40px', sm: '40px', lg: '48px' }, fontWeight: '200', color: 'rgb(81,84,87)', textAlign: 'center' }}>
                        Featured Product
                    </Typography>
                    <Box sx={{ width: {xs:'100%',md:'100%',lg:'575px'}, height: 'auto', padding:'1px', marginTop: '5px', textAlign:'center' }}>
                        <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '400', color: 'rgb(81,84,87)', width: '100%', textAlign: 'center' }} >
                            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ height: 'auto', width: '100%', padding:'1px',marginTop:'20px', display:'flex', justifyContent:'space-between', flexDirection:{xs:'column',md:'row',lg:'row'} }}>
                    <Box sx={{ height: '100%', width: {xs:'100%',sm:'100%',md:'33.34%',lg:'32%'}, padding:'1px' }}>
                        <Box sx={{ width: '100%', padding:'1px' }}>
                            <img src={img} width='100%' alt="" />
                        </Box>
                        <Box sx={{ width: '100%', padding:'1px',paddingBottom:'50px', backgroundColor: 'white' }}>
                            <Box sx={{ width: '95%', margin: 'auto', height: '27px', padding:'1px', marginTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                    <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                </Box>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(188, 188, 188)' }}>
                                    $240.00
                                </Typography>
                            </Box>
                            <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginLeft: '10px', marginTop: '17px' }}>
                                Gym Weight
                            </Typography>
                            <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginLeft: '10px', marginTop: '17px',width:'10%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(188, 188, 188)', marginLeft: '10px', marginTop: '17px' }}>
                                Reviews (24)
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ height: '100%', width: {xs:'100%',sm:'100%',md:'33.34%',lg:'32%'}, padding:'1px', marginTop:{xs:'50px',md:'50px', lg:'0'} }}>
                        <Box sx={{ width: '100%', padding:'1px' }}>
                            <img src={img1} width='100%' alt="" />
                        </Box>
                        <Box sx={{ width: '100%', padding:'1px',paddingBottom:'22px', backgroundColor: 'white' }}>
                            <Box sx={{ width: '95%', margin: 'auto', height: '27px', padding:'1px', marginTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                    <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                </Box>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(188, 188, 188)' }}>
                                    $480.00
                                </Typography>
                            </Box>
                            <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginLeft: '10px', marginTop: '17px' }}>
                            Cloud Nike Shoes
                            </Typography>
                            <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginLeft: '10px', marginTop: '17px' }}>
                            Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(188, 188, 188)', marginLeft: '10px', marginTop: '17px' }}>
                                Reviews (48)
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ height: '100%', width: {xs:'100%',sm:'100%',md:'33.34%',lg:'32%'}, padding:'1px', marginTop:{xs:'50px',md:'50px',lg:'0'} }}>
                        <Box sx={{ width: '100%', padding:'1px' }}>
                            <img src={img2} width='100%' alt="" />
                        </Box>
                        <Box sx={{ width: '100%',padding:'1px',paddingBottom:'22px', backgroundColor: 'white' }}>
                            <Box sx={{ width: '95%', margin: 'auto', height: '27px', padding:'1px', marginTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                    <StarIcon sx={{ color: 'rgb(237,232,97)' }} />
                                </Box>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(188, 188, 188)' }}>
                                    $360.00
                                </Typography>
                            </Box>
                            <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginLeft: '10px', marginTop: '17px' }}>
                            Summer Addides Shoes
                            </Typography>
                            <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)',  marginTop: '17px',paddingLeft:'10px' }}>
                            Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(188, 188, 188)', marginLeft: '10px', marginTop: '17px' }}>
                                Reviews (74)
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}
