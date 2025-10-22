import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

export default function Experience() {

    const experience = [{
        companyName: 'CyTech International',
        position: 'Web Developer',
        date: 'Dec  2023 - Aug 2025',
        description: `Developed enterprise-level web applications using React with
        TypeScript and Next.js for front-end development, and Python with
        Django for back-end services. Focused on creating scalable, secure,
        and high-performance solutions for business-critical operations.`
    },
    {
        companyName: 'Freelance',
        position: 'Web Developer | SEO Specialist',
        date: 'Aug 2022 - Dec 2022',
        description: `Implemented responsive designs, optimized performance, and
        applied SEO best practices. Also Theme customization, plugin
        integration, and content management.`
    },

    ]

    return (
        <Box sx={{ width: '100%', overflow: 'hidden', p: 0.25 }}>
            <Paper
                variant='outlined'
                elevation={2}
                sx={{
                    backgroundColor: '#121212',
                    color: 'white',
                    border: '1px solid #333',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', sm: 'start', md: 'start' },
                    textAlign: { xs: 'center', sm: 'start', md: 'start' },
                }}
            >


                <Box sx={{ display: 'flex', flexDirection: 'row', mb: 1, alignItems: 'center', gap: 0.5 }}>
                    <HomeRepairServiceIcon sx={{ color: 'gray', fontSize: 20 }} />
                    <Typography>
                        Experience
                    </Typography>
                </Box>

                <Box
                    sx={{
                        marginLeft: { xs: '2rem', md: 0 },
                        marginRight: { xs: '2rem', md: 0 },
                    }}>
                    <Timeline position="right"

                        sx={{
                            p: 0,
                            m: 0,
                            width: '100%',
                            '& .MuiTimelineItem-root:before': {
                                flex: 0, // 👈 removes invisible spacer before items
                                padding: 0,
                            },


                        }}
                    >

                        {experience.map((item, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant='outlined' sx={{ color: 'black' }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography fontWeight="bold" sx={{ fontSize: '14px' }}>
                                        {item.position}
                                    </Typography>
                                    <Typography sx={{ fontSize: '10px' }}>{item.companyName}</Typography>
                                    <Typography sx={{ fontSize: '10px' }}>{item.date}</Typography>

                                </TimelineContent>
                            </TimelineItem>
                        )
                        )}
                    </Timeline>
                </Box>

            </Paper>
        </Box>
    )
}
