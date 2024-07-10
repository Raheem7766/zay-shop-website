import { Box, Typography } from '@mui/material'
import React from 'react'
import AccordionUsage from './Accordian'
import SelectLabels from './Select'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import img from './Imgs/shop_01.jpg'
import img1 from './Imgs/shop_02.jpg'
import img2 from './Imgs/shop_03.jpg'
import img3 from './Imgs/shop_04.jpg'
import img4 from './Imgs/shop_05.jpg'
import img5 from './Imgs/shop_06.jpg'
import img6 from './Imgs/shop_07.jpg'
import img7 from './Imgs/shop_08.jpg'
import img8 from './Imgs/shop_09 (3).jpg'

export default function ShopFeature() {
    return (
        <Box maxWidth='xl' sx={{ width: '100%', height: "auto", padding:'1px',paddingBottom:'130px' }}>
            <Box sx={{ width: {xs:'95%',sm:'74%',md:'74%',lg:'87%'}, height: 'auto',  padding:'1px', margin: 'auto', display: 'flex',flexDirection:{xs:'column',md:'column',lg:'row'} }}>
                <Box sx={{ width: {xs:'100%',md:'100%',lg:'328px'}, height: 'auto',  padding:'1px', marginTop: '45px' }}>
                    <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: '300', color: 'RGB(33, 37, 41)' }}>
                        Categories
                    </Typography>
                    <AccordionUsage />
                </Box>
                <Box sx={{ height: 'auto', width: {xs:'100%',md:'100%',lg:'75.2%'},  padding:'1px', marginTop: '45px' }}>
                    <Box sx={{ width: '100%', height: 'auto',  padding:'1px', display: 'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'} }}>
                        <Box sx={{ height: '100%', width: {xs:'100%',sm:'100%',md:'50%',lg:'50%'},  padding:'1px' }}>
                            <Typography variant='h2' sx={{ fontSize: '24px', fontWeight: '200', color: 'RGB(33, 37, 41)' }}>
                                All Men's Women's
                            </Typography>
                        </Box>
                        <Box sx={{ width: {xs:'100%',sm:'100%',md:'50%',lg:'50%'}, height: '100%',  padding:'1px' }}>
                            <SelectLabels />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', height: 'auto', padding:'1px',display:'flex',justifyContent:'space-between',flexWrap:'wrap' }}>
                        <Box sx={{ width: {xs:'100%' ,sm:'100%',md:'31%',lg:'31%'}, height: 'auto',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',  padding:'1px', marginTop: {xs:'20px',sm:'20px',md:'0',lg:'0'}}}>
                            <Box sx={{ width: '100%',  padding:'1px', position: 'relative' }}>
                                <img src={img} width='100%' alt="" />
                                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.224)', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0', visibility: 'hidden' }}>
                                    <Box sx={{ width: '45px', height: '39%',  padding:'1px' }}>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <VisibilityIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: 'auto',  padding:'1px',paddingBottom:'20px' }}>
                                <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(0, 0, 0)', marginTop: '15px', marginLeft: '12px' }}>
                                    Oupidatat non
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '7px', marginLeft: '12px', letterSpacing: '1px' }}>
                                    M/L/X/XL
                                </Typography>
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)', marginLeft: '90px' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '10px' }}>
                                    $250.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: {xs:'100%' ,sm:'100%',md:'31%',lg:'31%'}, height: 'auto',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',  padding:'1px', marginTop: {xs:'20px',sm:'20px',md:'0',lg:'0'} }}>
                            <Box sx={{ width: '100%',  padding:'1px', position: 'relative' }}>
                                <img src={img1} width='100%' alt="" />
                                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.224)', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0', visibility: 'hidden' }}>
                                    <Box sx={{ width: '45px', height: '39%',  padding:'1px' }}>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <VisibilityIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: 'auto',  padding:'1px',paddingBottom:'20px' }}>
                                <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(0, 0, 0)', marginTop: '15px', marginLeft: '12px' }}>
                                    Oupidatat non
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '7px', marginLeft: '12px', letterSpacing: '1px' }}>
                                    M/L/X/XL
                                </Typography>
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)', marginLeft: '90px' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '10px' }}>
                                    $250.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: {xs:'100%' ,sm:'100%',md:'31%',lg:'31%'}, height: 'auto',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',  padding:'1px', marginTop: {xs:'20px',sm:'20px',md:'0',lg:'0'} }}>
                            <Box sx={{ width: '100%',  padding:'1px', position: 'relative' }}>
                                <img src={img2} width='100%' alt="" />
                                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.224)', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0', visibility: 'hidden' }}>
                                    <Box sx={{ width: '45px', height: '39%',  padding:'1px' }}>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <VisibilityIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: 'auto',  padding:'1px',paddingBottom:'20px' }}>
                                <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(0, 0, 0)', marginTop: '15px', marginLeft: '12px' }}>
                                    Oupidatat non
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '7px', marginLeft: '12px', letterSpacing: '1px' }}>
                                    M/L/X/XL
                                </Typography>
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)', marginLeft: '90px' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '10px' }}>
                                    $250.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: {xs:'100%' ,sm:'100%',md:'31%',lg:'31%'}, height: 'auto',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',  padding:'1px',marginTop:'25px' }}>
                            <Box sx={{ width: '100%',  padding:'1px', position: 'relative' }}>
                                <img src={img3} width='100%' alt="" />
                                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.224)', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0', visibility: 'hidden' }}>
                                    <Box sx={{ width: '45px', height: '39%',  padding:'1px' }}>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <VisibilityIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: 'auto',  padding:'1px',paddingBottom:'20px' }}>
                                <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(0, 0, 0)', marginTop: '15px', marginLeft: '12px' }}>
                                    Oupidatat non
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '7px', marginLeft: '12px', letterSpacing: '1px' }}>
                                    M/L/X/XL
                                </Typography>
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)', marginLeft: '90px' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '10px' }}>
                                    $250.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: {xs:'100%' ,sm:'100%',md:'31%',lg:'31%'}, height: 'auto',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',  padding:'1px',marginTop:'25px' }}>
                            <Box sx={{ width: '100%',  padding:'1px', position: 'relative' }}>
                                <img src={img4} width='100%' alt="" />
                                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.224)', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0', visibility: 'hidden' }}>
                                    <Box sx={{ width: '45px', height: '39%',  padding:'1px' }}>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <VisibilityIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: 'auto',  padding:'1px',paddingBottom:'20px' }}>
                                <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(0, 0, 0)', marginTop: '15px', marginLeft: '12px' }}>
                                    Oupidatat non
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '7px', marginLeft: '12px', letterSpacing: '1px' }}>
                                    M/L/X/XL
                                </Typography>
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)', marginLeft: '90px' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '10px' }}>
                                    $250.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: {xs:'100%' ,sm:'100%',md:'31%',lg:'31%'}, height: 'auto',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',  padding:'1px',marginTop:'25px' }}>
                            <Box sx={{ width: '100%',  padding:'1px', position: 'relative' }}>
                                <img src={img5} width='100%' alt="" />
                                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.224)', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0', visibility: 'hidden' }}>
                                    <Box sx={{ width: '45px', height: '39%',  padding:'1px' }}>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <VisibilityIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: 'auto',  padding:'1px',paddingBottom:'20px' }}>
                                <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(0, 0, 0)', marginTop: '15px', marginLeft: '12px' }}>
                                    Oupidatat non
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '7px', marginLeft: '12px', letterSpacing: '1px' }}>
                                    M/L/X/XL
                                </Typography>
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)', marginLeft: '90px' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '10px' }}>
                                    $250.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: {xs:'100%' ,sm:'100%',md:'31%',lg:'31%'}, height: 'auto',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',  padding:'1px',marginTop:'25px' }}>
                            <Box sx={{ width: '100%',  padding:'1px', position: 'relative' }}>
                                <img src={img6} width='100%' alt="" />
                                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.224)', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0', visibility: 'hidden' }}>
                                    <Box sx={{ width: '45px', height: '39%',  padding:'1px' }}>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <VisibilityIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: 'auto',  padding:'1px',paddingBottom:'20px' }}>
                                <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(0, 0, 0)', marginTop: '15px', marginLeft: '12px' }}>
                                    Oupidatat non
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '7px', marginLeft: '12px', letterSpacing: '1px' }}>
                                    M/L/X/XL
                                </Typography>
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)', marginLeft: '90px' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '10px' }}>
                                    $250.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: {xs:'100%' ,sm:'100%',md:'31%',lg:'31%'}, height: 'auto',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',  padding:'1px',marginTop:'25px' }}>
                            <Box sx={{ width: '100%',  padding:'1px', position: 'relative' }}>
                                <img src={img7} width='100%' alt="" />
                                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.224)', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0', visibility: 'hidden' }}>
                                    <Box sx={{ width: '45px', height: '39%',  padding:'1px' }}>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <VisibilityIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: 'auto',  padding:'1px',paddingBottom:'20px' }}>
                                <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(0, 0, 0)', marginTop: '15px', marginLeft: '12px' }}>
                                    Oupidatat non
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '7px', marginLeft: '12px', letterSpacing: '1px' }}>
                                    M/L/X/XL
                                </Typography>
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)', marginLeft: '90px' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '10px' }}>
                                    $250.00
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: {xs:'100%' ,sm:'100%',md:'31%',lg:'31%'}, height: 'auto',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',  padding:'1px',marginTop:'25px' }}>
                            <Box sx={{ width: '100%',  padding:'1px', position: 'relative' }}>
                                <img src={img8} width='100%' alt="" />
                                <Box sx={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.224)', position: 'absolute', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0', visibility: 'hidden' }}>
                                    <Box sx={{ width: '45px', height: '39%',  padding:'1px' }}>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <FavoriteBorderIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <VisibilityIcon sx={{ color: 'white' }} />
                                        </Box>
                                        <Box sx={{ width: '100%', height: '27%', backgroundColor: 'rgb(89,171,110)', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <ShoppingCartIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', height: 'auto',  padding:'1px',paddingBottom:'20px' }}>
                                <Typography variant='h2' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(0, 0, 0)', marginTop: '15px', marginLeft: '12px' }}>
                                    Oupidatat non
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '7px', marginLeft: '12px', letterSpacing: '1px' }}>
                                    M/L/X/XL
                                </Typography>
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)', marginLeft: '90px' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'RGB(237, 232, 97)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <StarIcon sx={{ color: 'rgb(188,188,188)' }} />
                                <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '10px' }}>
                                    $250.00
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>

        </Box>
    )
}
