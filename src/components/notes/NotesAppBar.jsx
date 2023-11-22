import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export const NotesAppBar = () => {
  
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const date = new Date();
    
    const dateEs = `${date.getDate()} de ${months[date.getMonth()]}, ${ date.getFullYear() }`;
    
    return (
    <Box sx={{ alignItems:'center', 
                color: 'primary.main', 
                display: 'flex', 
                justifyContent: 'space-between',
                mb: 2 
            }}
    >
        <Typography variant='h5' >
            {dateEs}
        </Typography>
        <Button sx={{ alignItems: 'center', display: 'flex' }} >
            <SaveOutlinedIcon sx={{ height: 30, width: 30 }} />
            <Typography sx={{ ml: 1 }} variant= 'subtitle2' >
                Guardar
            </Typography>
        </Button>
    </Box>
  )
};
