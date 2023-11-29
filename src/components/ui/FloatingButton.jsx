import { Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';

import { startNewNote } from '../../store/notes/thunks';


export const FloatingButton = () => {
  
  const dispatch = useDispatch() 

  const handleAddNewNote = ()=>{
    dispatch(startNewNote())
  }
  
  return (
    <Button
      onClick={handleAddNewNote} 
      sx={[{ 
        position: 'fixed',
        bgcolor: 'error.main',
        borderRadius: 20,
        bottom: 45,
        height: 65,
        right: 60,
        width: 65
      }, {
        '&:hover': {
          bgcolor: 'error.light'
        }  
      } ]} 
    variant='contained'
    >
        <Typography sx={{ fontSize: 36 }} >+</Typography>
    </Button>    
  )
}


