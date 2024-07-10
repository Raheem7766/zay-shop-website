import React from 'react'
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { FaFacebookF } from "react-icons/fa";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Nav() {
    return (
        <Box maxWidth="xxl" sx={{ width: "100%", height: '40px', backgroundColor: 'rgb(33,41,52)', display: { xs: 'none', md: 'flex' } }}>
            <Box maxWidth="xl" sx={{ width: "85%", height: '100%', padding:'1px', margin: "auto", display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <Box sx={{ width: "235px", height: '100%', padding:'1px', display: 'flex' }}>
                    <Box sx={{ width: '57%', height: '100%', padding:'1px', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                        <EmailIcon sx={{ fontSize: '14px', color: "RGB(207, 214, 225)" }} />
                        <Typography variant='h2' sx={{ fontSize: "12px", fontWeight: '400', color: 'RGB(207, 214, 225)' }}>
                            info@company.com
                        </Typography>
                    </Box>
                    <Box sx={{ width: '43%', height: '100%', padding:'1px', display: 'flex', justifyContent: "space-evenly", alignItems: 'center' }}>
                        <PhoneEnabledIcon sx={{ fontSize: '14px', color: "RGB(207, 214, 225)" }} />
                        <Typography variant='h2' sx={{ fontSize: "12px", fontWeight: '400', color: 'RGB(207, 214, 225)' }}>
                            010-020-0340
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '99px', height: '100%', padding:'1px', fontSize: '13px', color: 'RGB(207, 214, 225)', display: 'flex', justifyContent: "space-between", alignItems: 'center', paddingRight: '8px' }}>
                    <FaFacebookF sx={{ fontSize: '13px' }} />
                    <InstagramIcon sx={{ fontSize: '13px' }} />
                    <TwitterIcon sx={{ fontSize: '13px' }} />
                    <LinkedInIcon sx={{ fontSize: '13px' }} />
                </Box>
            </Box>
        </Box>
    )
}
