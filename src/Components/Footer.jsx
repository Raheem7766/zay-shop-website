import { Box, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailIcon from '@mui/icons-material/Mail';
import { FaFacebookF } from "react-icons/fa";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {
  return (
    <Box maxWidth='xl' sx={{ height: 'auto', width: '100%', backgroundColor: 'rgb(33,41,52)',padding:'1px' }}>
      <Box sx={{ height: 'auto', width: {xs:'95%',sm:'95%%',md:'86%',lg:"86%"}, padding:'1px', margin: 'auto' }}>
        <Box sx={{ height: '77.5%', width: '100%', padding:'1px', display: 'flex', flexDirection: { xs: 'column',sm:'column', md: 'row', lg: 'row' }, paddingBottom: '40px' }}>
          <Box sx={{ height: '100%', width: { xs: '100%', sm: '100%', md: '33.34%', lg: '33%' }, padding:'1px' }}>
            <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: '500', color: 'RGB(89, 171, 110)', marginTop: '43px' }}>
              Zay Shop
            </Typography>
            <Box sx={{ width: '100%', padding:'1px', marginTop: '33px', display: 'flex', alignItems: "center" }}>
              <LocationOnIcon sx={{ fontSize: '23px', color: 'RGB(207, 214, 225)' }} />
              <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)' }}>
                123 Consectetur at ligula 10660
              </Typography>
            </Box>
            <Box sx={{ width: '100%', padding:'1px', marginTop: '10px', display: 'flex', alignItems: "center" }}>
              <PhoneEnabledIcon sx={{ fontSize: '23px', color: 'RGB(207, 214, 225)' }} />
              <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '5px' }}>
                010-020-0340
              </Typography>
            </Box>
            <Box sx={{ width: '100%', padding:'1px', marginTop: '10px', display: 'flex', alignItems: "center" }}>
              <MailIcon sx={{ fontSize: '23px', color: 'RGB(207, 214, 225)' }} />
              <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '5px' }}>
                info@company.com
              </Typography>
            </Box>
          </Box>
          <Box sx={{ height: '100%', width: { xs: '100%', sm: '100%', md: '33.34%', lg: '33%' }, padding:'1px' }}>
            <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '10px', marginTop: '42px' }}>
              Products
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '38px' }}>
              Luxury
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              Sport Wear
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              Men's Shoes
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              Women's Shoes
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              Popular Dress
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              Gym Accessories
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              Sport Shoes
            </Typography>
          </Box>
          <Box sx={{ height: '100%', width: { xs: '100%', sm: '100%', md: '33.34%', lg: '33%' }, padding:'1px', marginLeft: { xs: '0', md: '0', lg: '10px' } }}>
            <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '10px', marginTop: '42px' }}>
              Further Info
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '38px' }}>
              Home
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              About Us
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              Shop Locations
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              FAQs
            </Typography>
            <Typography variant='h3' sx={{ fontSize: '18px', fontWeight: '300', color: 'RGB(207, 214, 225)', marginLeft: '12px', marginTop: '15px' }}>
              Contact
            </Typography>
          </Box>
        </Box> 
        <Box sx={{ height: '110px', width: '100%', padding:'1px', display: 'flex', justifyContent: { xs: 'flex-start', md: "space-between", lg: "space-between" }, alignItems: 'center', flexDirection: { xs: 'column', md: 'row', lg: 'row' } }}>
          <Box sx={{ height: '90%', width: '230px',padding:'1px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ height: '40px', width: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'RGB(207, 214, 225)', fontSize: '22px', ":hover": { backgroundColor: 'white', color: 'black' }, cursor: 'pointer' }}>
              <FaFacebookF />
            </Box>
            <Box sx={{ height: '40px', width: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'RGB(207, 214, 225)', fontSize: '22px', ":hover": { backgroundColor: 'white', color: 'black' }, cursor: 'pointer' }}>
              <InstagramIcon />
            </Box>
            <Box sx={{ height: '40px', width: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'RGB(207, 214, 225)', fontSize: '22px', ":hover": { backgroundColor: 'white', color: 'black' }, cursor: 'pointer' }}>
              <TwitterIcon />
            </Box>
            <Box sx={{ height: '40px', width: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'RGB(207, 214, 225)', fontSize: '22px', ":hover": { backgroundColor: 'white', color: 'black' }, cursor: 'pointer' }}>
              <LinkedInIcon />
            </Box>
          </Box>
          <Box sx={{ height: '50px', width: '333px', padding:'1px', display: 'flex' }}>
            <input type="text" style={{ height: '100%', width: '68.5%', border: '1px solid RGB(207, 214, 225)', outline: 'none', backgroundColor: 'rgb(33,41,52)', fontSize: '18px', fontWeight: '300', paddingLeft: '10px' }} placeholder='Email address' />
            <button style={{ height: '100% ', backgroundColor: 'rgb(89,171,110)', width: '102px', border: 'none', fontSize: '18px', fontWeight: '400', color: 'white' }}>
              Subscribe
            </button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', height: {xs:'auto',md:'auto',lg:'90px'}, paddingBottom: '30px', backgroundColor: 'rgb(29,36,45)', display: 'flex', alignItems: 'center', paddingLeft: {xs:'0',sm:'0',md:'105px',lg:'105px'} }}>
        <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '300', color: 'white', marginTop: '30px' }}>
          Copyright © 2021 Company Name | Designed by <span style={{ textDecoration: 'underline' }}>TemplateMo</span>
        </Typography>
      </Box>
    </Box>
  )
}
