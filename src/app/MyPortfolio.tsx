import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Techstack from './components/Techstack'
import Hobbies from './components/Hobbies'
import Features from './components/Features'

export default function MyPortfolio() {
    return (
        <Box sx={{ minHeight: '100vh', maxWidth: '120vh' }}>
            <Grid container >
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <Header />
                </Grid>
                <Grid size={{ xs: 12, sm: 4, md: 4 }}>
                    <Experience />
                </Grid>
                <Grid size={{ xs: 12, sm: 8, md: 8 }}>
                    <About />
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <Techstack />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <Features />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                    <Hobbies />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 12, }}>
                    <Box sx={{ mt: '4rem', mb: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: "1rem" }}>
                        <Divider sx={{ borderColor: '#333', }} />
                        <Typography>
                            © 2025 Gemar Jamila. All rights reserved.
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}
