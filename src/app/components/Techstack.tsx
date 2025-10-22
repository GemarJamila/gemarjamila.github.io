import { Box, Chip, Paper, Typography } from '@mui/material'
import React from 'react'
import LayersIcon from '@mui/icons-material/Layers';


export default function Techstack() {

    const techStack = [
        { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'MUI'] },
        { title: 'Backend', items: ['PHP', 'MySQL', 'Python', 'Django', 'PostgreSQL', 'TypeScript'] },
    ];


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
                <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={0.5}>
                    <LayersIcon sx={{ color: 'gray', fontSize: 20 }} />
                    <Typography>
                        Tech Stack
                    </Typography>
                </Box>

                <Box display={'flex'} flexDirection={'column'} p={'0 0.2rem'} mt={'0.5rem'}>
                    {techStack.map(({ title, items }, index) => (
                        <Box key={index} sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center', mb: 1 }}>
                            <Typography sx={{ minWidth: 100, fontWeight: 600 }}>{title}</Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {items.map((tech, i) => (
                                    <Chip key={i} color="default" label={tech} variant="outlined" sx={{ color: 'white', '&:hover': { borderColor: '#07f9c7', transition: '0.3s' }, }} />
                                ))}
                            </Box>
                        </Box>
                    ))}


                </Box>

            </Paper>
        </Box>
    )
}
