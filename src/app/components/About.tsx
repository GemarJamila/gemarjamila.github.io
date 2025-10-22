import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';

export default function About() {
    return (
        <Box sx={{ p: 0.25 }} width={'100%'}  >
            <Paper
                variant='outlined'
                elevation={2}
                sx={{
                    backgroundColor: '#121212',
                    color: 'white',
                    border: '1px solid #333',
                    p: 2,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', sm: 'center', md: 'start' },
                    textAlign: { xs: 'center', sm: 'center', md: 'start' },
                }}
            >

                <Box display={'flex'} flexDirection={'row'} gap={0.5} alignItems={'center'}>
                    <InfoIcon sx={{ color: 'gray', fontSize: 20 }} />
                    <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                        About me
                    </Typography>
                </Box>
                <Box mt={'0.17rem'}>
                    <Typography sx={{ fontSize: 15, lineHeight: 1.8, mt: 1 }}>
                        I&apos;m a web developer experienced in building modern, responsive, and user-friendly web applications. I work with technologies such as Javascript, React, Next.js, MUI, Django, and PHP to create efficient and scalable solutions. I’m passionate about writing clean, maintainable code and delivering intuitive interfaces that enhance user experience and business productivity.
                    </Typography>
                </Box>


            </Paper>
        </Box>
    )
}
