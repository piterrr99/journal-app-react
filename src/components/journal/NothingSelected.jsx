import { Box } from "@mui/system";
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import React from 'react'
import { Typography } from "@mui/material";

export const NothingSelected = () => {
  return (
    <Box 
        sx={{
            alignItems: 'center',
            bgcolor: 'primary.main', 
            color: 'white',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '82vh',
            justifyContent: 'center',
        }}
    >
        <StarOutlineIcon  sx={{ height: 100, width: 150 }} />
        <Typography>
            Selecciona o crea una entrada
        </Typography>
    </Box>    
  )
}


