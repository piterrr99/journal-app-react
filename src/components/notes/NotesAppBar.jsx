import { Box, Button, Typography } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import React from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { startSaveNotes, startUploadingImage } from '../../store/notes/thunks';


export const NotesAppBar = ( {date, note} ) => {
  
    const noteDate = moment(date).format('MMMM Do YYYY');

    const dispatch = useDispatch();



    const handleSaveNote = ()=>{
        dispatch(startSaveNotes(note))
    }

    const handleUploadImage = ()=>{
        
        document.querySelector('#fileSelector').click()
        
    }

    const handleFileChange =({target})=>{
        console.log(target.files)
        dispatch(startUploadingImage(target.files))
    }
    
    return (
    <Box sx={{ alignItems:'center', 
                color: 'primary.main', 
                display: 'flex', 
                justifyContent: 'space-between',
                mb: 2 
            }}
    >
        <Typography variant='h5' >
            {noteDate}
        </Typography>
        <input 
            multiple
            id='fileSelector'
            type='file'
            name='file'
            onChange={handleFileChange}
            style={{display: 'none'}}
        />
        <Box sx={{display: 'flex'}} >
            <abbr title='Añadir Imagen'>
                <Button onClick={handleUploadImage} sx={{ alignItems: 'flex-start', display: 'flex' }} >
                    <FileUploadIcon />
                </Button>
            </abbr>
            <Button onClick={handleSaveNote} sx={{ alignItems: 'center', display: 'flex' }} >
                <SaveOutlinedIcon sx={{ height: 30, width: 30 }} />
                <Typography sx={{ ml: 1 }} variant= 'subtitle2' >
                    Guardar
                </Typography>
            </Button>
        </Box>
    </Box>
  )
};
