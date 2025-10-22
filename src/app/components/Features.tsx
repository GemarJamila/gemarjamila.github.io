import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

export default function Features() {

    const features = [
        {
            title: 'Task Management',
            desc: 'Create, assign, and track tasks with real-time updates and user roles.',
        },
        {
            title: 'Landing Page',
            desc: 'Built responsive and SEO-friendly landing pages using Next.js and MUI.',
        },
        {
            title: 'Dashboards',
            desc: 'Developed dynamic dashboards with analytics, filters, and data visualization.',
        },
    ]

    return (
        <Box sx={{ p: 0.25 }} width={'100%'} >
            <Paper
                variant='outlined'
                elevation={2}
                sx={{
                    backgroundColor: '#121212',
                    color: 'white',
                    border: '1px solid #333',
                    p: 2,
                    borderRadius: 2,
                }}
            >

                <Box sx={{ display: 'flex', flexDirection: 'row' }} gap={0.5}>
                    <DeveloperBoardIcon sx={{ color: 'gray', fontSize: 20 }} />
                    <Typography sx={{ fontWeight: 700, mb: 2, }}>
                        Major Features I&apos;ve Built
                    </Typography>
                </Box>



                <Divider sx={{ borderColor: '#333', mb: 2 }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            sx={{
                                backgroundColor: '#1a1a1a',
                                borderRadius: 2,
                                p: 2,
                                border: '1px solid #222',
                                '&:hover': { borderColor: '#07f9c7', transition: '0.3s' },
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                {feature.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: 'rgba(255,255,255,0.75)', mt: 0.5 }}
                            >
                                {feature.desc}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </Box>
    )
}
