import { Box, Chip, Paper, Typography } from '@mui/material'
import React from 'react'
import ExtensionIcon from '@mui/icons-material/Extension';

export default function Hobbies() {

    const hobbies = [
        { title: 'Random Coding' }, { title: 'Watching YT content (related to my techstack)' }, { title: 'Personal Projects' }, { title: 'Online Games' }, { title: 'Sports' },
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


                <Box display={'flex'} flexDirection={'row'} mb={'1rem'} gap={0.5}>
                    <ExtensionIcon sx={{ color: 'gray', fontSize: 20 }} />
                    <Typography>
                        Hobbies
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, gap: 1 }}>
                    {hobbies.map((item, index) => (

                        <Chip key={index} color="default" label={item.title} variant="outlined" sx={{ color: 'white', '&:hover': { borderColor: '#07f9c7', transition: '0.3s' }, }} />

                    ))}

                </Box>
            </Paper>

        </Box>
    )
}
