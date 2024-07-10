import { Box, Typography } from '@mui/material';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from './Imgs/banner_img_01.jpg';
import img1 from './Imgs/banner_img_02.jpg';
import img2 from './Imgs/banner_img_03.jpg';

function UncontrolledExample() {
    return (
        <Carousel data-bs-theme="dark" style={{ height: '100%', width: '100%', cursor: 'auto', padding: '1px', margin: 'auto' }}>
            <Carousel.Item >
                <Box sx={{ height: '92vh', width: '87%', padding: '1px', margin: 'auto', display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row', lg: 'row' } }}>
                    <Box sx={{ height: '100%', width: { sx: '75%', md: '75%', lg: '657px' }, margin: { sx: 'auto', md: 'auto' }, padding: '1px', display: 'flex', justifyContent: "center", flexDirection: 'column', paddingLeft: '50px' }}>
                        <Typography variant='h2' sx={{ fontSize: '48px', fontWeight: '200', color: 'RGB(89, 171, 110)', marginTop: { xs: '0', md: '0', lg: '-20px' } }}>
                            Zay <span style={{ fontWeight: '100' }}>eCommerce</span>
                        </Typography>
                        <Typography variant='h3' sx={{ fontSize: '30px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '5px' }}>
                            Tiny and Perfect eCommerce Template
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '400', color: 'RGB(33, 37, 41)', marginTop: '10px' }}>
                            Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by <span style={{ color: 'rgb(104,178,123)', textDecoration: 'underline' }}>TemplateMo</span> website. Image credits go to <span style={{ color: 'rgb(104,178,123)', textDecoration: 'underline' }}>Freepik Stories</span>, <span style={{ color: 'rgb(104,178,123)', textDecoration: 'underline' }} >Unsplash</span> and <span style={{ color: 'rgb(104,178,123)', textDecoration: 'underline' }}>Icons 8</span>.
                        </Typography>
                    </Box>
                    <Box sx={{ width: { xs: '100%', md: '100%', lg: '657px' }, padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box sx={{ width: { xs: '70%', md: '70%', lg: '90%' }, padding: '1px' }}>
                            <img src={img} width="100%" alt="" />
                        </Box>
                    </Box>
                </Box>
            </Carousel.Item>
            <Carousel.Item>
                <Box sx={{ height: '92vh', width: '87%', padding: '1px', margin: 'auto', display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row', lg: 'row' } }}>
                    <Box sx={{ height: '100%', width: { sx: '75%', md: '75%', lg: '657px' }, margin: { sx: 'auto', md: 'auto' }, padding: '1px', display: 'flex', justifyContent: "center", flexDirection: 'column', paddingLeft: '50px' }}>
                        <Typography variant='h2' sx={{ fontSize: '48px', fontWeight: '200', color: 'RGB(33, 37, 41)', marginTop: '-20px' }}>
                            Proident occaecat
                        </Typography>
                        <Typography variant='h3' sx={{ fontSize: '30px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '5px' }}>
                            Aliquip ex ea commodo consequat
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '400', color: 'RGB(33, 37, 41)', marginTop: '10px' }}>
                            You are permitted to use this Zay CSS template for your commercial websites. You are <span style={{ fontWeight: "500" }}>not permitted</span> to re-distribute the template ZIP file in any kind of template collection websites.
                        </Typography>
                    </Box>
                    <Box sx={{ width: { xs: '100%', md: '100%', lg: '657px' }, padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box sx={{ width: { xs: '70%', md: '70%', lg: '90%' }, padding: '1px' }}>
                            <img src={img1} width="100%" alt="" />
                        </Box>
                    </Box>
                </Box>
            </Carousel.Item>
            <Carousel.Item>
                <Box sx={{ height: '92vh', width: '87%', padding: '1px', margin: 'auto', display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row', lg: 'row' } }}>
                    <Box sx={{ height: '100%', width: { sx: '75%', md: '75%', lg: '657px' }, margin: { sx: 'auto', md: 'auto' }, padding: '1px', display: 'flex', justifyContent: "center", flexDirection: 'column', paddingLeft: '50px' }}>
                        <Typography variant='h2' sx={{ fontSize: '48px', fontWeight: '200', color: 'RGB(33, 37, 41)', marginTop: '-20px' }}>
                            Repr in voluptate
                        </Typography>
                        <Typography variant='h3' sx={{ fontSize: '30px', fontWeight: '300', color: 'RGB(33, 37, 41)', marginTop: '5px' }}>
                            Ullamco laboris nisi ut
                        </Typography>
                        <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '400', color: 'RGB(33, 37, 41)', marginTop: '10px' }}>
                            We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                        </Typography>
                    </Box>
                    <Box sx={{ width: { xs: '100%', md: '100%', lg: '657px' }, padding: '1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Box sx={{ width: { xs: '70%', md: '70%', lg: '90%' }, padding: '1px' }}>
                            <img src={img2} width="100%" alt="" />
                        </Box>
                    </Box>
                </Box>
            </Carousel.Item>
        </Carousel>
    );
}


export default UncontrolledExample;
