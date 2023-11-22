import { Box, ImageList, ImageListItem, TextField } from '@mui/material'
import React from 'react'

import { itemData } from '../../data/itemData'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {


  return (
    <Box>
        <NotesAppBar  />
        <TextField id="title" label="Título" fullWidth variant="filled" sx={{ mb: 1 }} />
        <TextField id="description"  
                    fullWidth
                    minRows={ 5 } 
                    multiline
                    placeholder='¿Qué sucedió el día de hoy?' 
                    variant="filled" 
        />
        <ImageList sx={{ overflow: 'visible' }} cols={3} rowHeight={164}  >
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
        ))}
        </ImageList>

    </Box>
  )
}
