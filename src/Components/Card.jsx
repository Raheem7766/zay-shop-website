import { Box, Typography } from '@mui/material'
import React from 'react'
import img from "./Imgs/category_img_01.jpg"
import img1 from "./Imgs/category_img_02.jpg"
import img2 from "./Imgs/category_img_03.jpg"

export default function Card() {
  return (
    <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '111.5vh' }, paddingBottom: { xs: '50px', md: '50px', lg: '0' } }}>
      <Box sx={{ height: '100%', width: '87%', padding: '1px', margin: 'auto' }}>
        <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '150px' }, width: '100%', padding: '1px', marginTop: { xs: '35px', lg: '50px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='h2' sx={{ fontSize: { xs: '42px', sm: '42px', lg: '48px' }, fontWeight: '200', color: 'rgb(81,84,87)', marginTop: '15px', textAlign: 'center' }}>
            Categories of The Month
          </Typography>
          <Box sx={{ width: { xs: '100%', md: '100%', lg: '657px' }, height: 'auto', padding: '1px', textAlign: 'center' }}>
            <Typography variant='p' sx={{ fontSize: '18px', fontWeight: '400', color: 'rgb(81,84,87)', marginTop: '2px', width: '100%', textAlign: 'center' }} >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ height: { xs: 'auto', md: 'auto', lg: '570px' }, width: '100%', padding: '1px', marginTop: '3px', display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'row' } }}>
          <Box sx={{ height: '100%', width: { xs: '100%', sm: '100%', md: '33.34%', lg: '33.34%' }, padding: '1px' }}>
            <Box sx={{ width: '79%', padding: '1px', margin: 'auto', marginTop: '60px' }}>
              <img src={img} height="100%" width="100%" style={{ borderRadius: '50%', cursor: 'pointer' }} alt="" />
            </Box>
            <Typography variant='h2' sx={{ fontSize: '20px', fontWeight: '700', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '17px' }}>
              Watches
            </Typography>
            <Box sx={{ height: '42px', width: '97px', margin: 'auto', marginTop: '17px', cursor: 'pointer', backgroundColor: 'rgb(89,171,110)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', borderRadius: '4px' }}>
              Go Shop
            </Box>
          </Box>
          <Box sx={{ height: '100%', width: { xs: '100%', sm: '100%', md: '33.34%', lg: '33.34%' }, padding: '1px' }}>
            <Box sx={{ width: '79%', padding: '1px', margin: 'auto', marginTop: '60px' }}>
              <img src={img1} height="100%" width="100%" style={{ borderRadius: '50%', cursor: 'pointer' }} alt="" />
            </Box>
            <Typography variant='h2' sx={{ fontSize: '20px', fontWeight: '700', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '17px' }}>
              Shoes
            </Typography>
            <Box sx={{ height: '42px', width: '97px', margin: 'auto', marginTop: '17px', cursor: 'pointer', backgroundColor: 'rgb(89,171,110)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', borderRadius: '4px' }}>
              Go Shop
            </Box>
          </Box>
          <Box sx={{ height: '100%', width: { xs: '100%', sm: '100%', md: '33.34%', lg: '33.34%' }, padding: '1px' }}>
            <Box sx={{ width: '79%', padding: '1px', margin: 'auto', marginTop: '60px' }}>
              <img src={img2} height="100%" width="100%" style={{ borderRadius: '50%', cursor: 'pointer' }} alt="" />
            </Box>
            <Typography variant='h2' sx={{ fontSize: '20px', fontWeight: '700', color: 'RGB(33, 37, 41)', textAlign: 'center', marginTop: '17px' }}>
              Accessories
            </Typography>
            <Box sx={{ height: '42px', width: '97px', margin: 'auto', marginTop: '17px', cursor: 'pointer', backgroundColor: 'rgb(89,171,110)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', borderRadius: '4px' }}>
              Go Shop
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
