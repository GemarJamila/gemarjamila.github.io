import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ProfileIMG from '@/app/assets/profile.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlatwareIcon from '@mui/icons-material/Flatware';
import CodeIcon from '@mui/icons-material/Code';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DownloadIcon from '@mui/icons-material/Download';

export default function Header() {
    return (
        <Grid container textAlign={{ xs: 'center', sm: 'start', md: 'start' }}>
            <Grid size={{ xs: 12, sm: 2.5, md: 2.5 }} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'start', md: 'start' }, padding: '1rem 0.2rem', }}>
                <Image
                    src={ProfileIMG}
                    alt='Profile Photo'
                    width={180}
                    height={180}
                    style={{ borderRadius: '2%', objectFit: 'cover' }}

                /></Grid>
            <Grid size={{ xs: 12, sm: 9.5, md: 9.5 }} sx={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>

                <Grid container >
                    <Grid size={{ xs: 12, sm: 12, md: 12 }} >
                        <Typography sx={{ fontSize: 25, fontWeight: 700, fontFamily: 'sans-serif' }}>
                            Gemar Jamila
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: { xs: 'center', sm: 'start', md: 'start' } }} >
                            <LocationOnIcon sx={{ fontSize: 14, marginTop: '1px' }} />
                            <Typography sx={{ fontSize: 12, fontFamily: 'sans-serif', gap: 10 }}>
                                Cagayan de Oro City, Philippines
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid container mt={2} >

                            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                                <Typography sx={{ fontSize: '1rem', lineHeight: '1.5rem', fontFamily: 'sans-serif', }}>
                                    Web Developer
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 6 }}>

                                <Grid container gap={{ xs: 2, sm: 0, md: 0 }}  >

                                    <Grid size={{ xs: 12, sm: 6, md: 6 }} display={'flex'} justifyContent={'center'}>
                                        <Button startIcon={<MailOutlineIcon />} variant='outlined'
                                            href='mailto:gemarjamila0@gmail.com'
                                            sx={{
                                                mt: { xs: 1, sm: 0, md: 0 },
                                                color: 'white',
                                                borderColor: '#808080ff',
                                                borderRadius: '7px',
                                                textTransform: 'none',
                                                fontWeight: 500,
                                                '&:hover': {
                                                    borderColor: '#ddd',
                                                },
                                                fontSize: 9
                                            }}
                                        >
                                            Send Email
                                        </Button>
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6, md: 6 }} display={'flex'} justifyContent={'center'}>

                                        <Button href='/resume.pdf' download='Gemar_Jamila_Resume.pdf' startIcon={<DownloadIcon />} variant='outlined'
                                            sx={{
                                                color: 'white',
                                                borderColor: '#808080ff',
                                                borderRadius: '7px',
                                                textTransform: 'none',
                                                fontWeight: 500,
                                                '&:hover': {
                                                    borderColor: '#ddd',
                                                },
                                                fontSize: 9

                                            }}
                                        >
                                            Download Resume
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                            <Grid container sx={{ color: 'gray', padding: '1rem', }} >
                                <Grid size={{ xs: 3, sm: 3, md: 3 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <FlatwareIcon sx={{ '&:hover': { color: 'white', transition: '0.3s' }, }} />
                                    <Typography sx={{ fontSize: 10, fontFamily: 'sans-serif', }}>
                                        eat
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 3, sm: 3, md: 3 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                    <HotelIcon sx={{ '&:hover': { color: 'white', transition: '0.3s' }, }} />
                                    <Typography sx={{ fontSize: 10, fontFamily: 'sans-serif', }}>
                                        sleep
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 3, sm: 3, md: 3 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                    <CodeIcon sx={{ '&:hover': { color: 'white', transition: '0.3s' }, }} />
                                    <Typography sx={{ fontSize: 10, fontFamily: 'sans-serif', }}>
                                        code
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 3, sm: 3, md: 3 }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                    <RepeatIcon sx={{ '&:hover': { color: 'white', transition: '0.3s' }, }} />
                                    <Typography sx={{ fontSize: 10, fontFamily: 'sans-serif', }}>
                                        reapeat
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}
