import { Box, Button, ImageList, ImageListItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import { NotesAppBar } from './NotesAppBar'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNotes } from '../../store/notes/notesSlice'
import { startDelete } from '../../store/notes/thunks';
import Swal from 'sweetalert2';

export const NotesScreen = () => {

  const {active:note} = useSelector(state=> state.notes)

  const dispatch = useDispatch()

  const { formState, handleInputChange, reset } = useForm(note)
  
  const { title, body, urls, id, date } = formState

  const ActiveId = useRef(note.id)
  const urlsRef = useRef(note.urls)


  useEffect(() => {
  
    if ((note.id !== ActiveId) || (note.urls !== urlsRef) ){
      reset(note);
      ActiveId.current = note.id;
      urlsRef.current = note.urls
    }
  
  }, [note.id, note.urls])

  useEffect(() => {

    dispatch( activeNotes(formState) )
    
  }, [formState])
  
  const handleDeleteNote = ()=>{

    Swal.fire({
      title: "¿Desea eliminar esta nota?",
      text: "No será capaz de recuperarla si lo hace",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: 'Borrar',
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDelete(note))
        Swal.fire({
          title: "¡Borrado!",
          text: "la nota ha sido eliminada exitosamente.",
          icon: "success"
        });
      }
    });

  }

  return (
    <Box>
        <NotesAppBar date={date} note={note} />
        <TextField id="title" 
                   fullWidth 
                   label="Título" 
                   name='title'
                   onChange={handleInputChange}
                   sx={{ mb: 1 }} 
                   variant="filled" 
                   value={title} 
        />
        <TextField id="description"  
                    fullWidth
                    minRows={ 5 } 
                    multiline
                    name='body'
                    onChange={handleInputChange}
                    placeholder='¿Qué sucedió el día de hoy?' 
                    variant="filled" 
                    value={body}
        />
        
        <Box sx={{display:'flex', justifyContent:'flex-end', mt:'5px'}}>
          <Button onClick={handleDeleteNote} >
            <DeleteIcon color='error' />
            <Typography color='error'>
              Borrar Nota
            </Typography>
          </Button>
        </Box>
        {(urls) && 
          <ImageList sx={{ overflow: 'visible', mt:'5px' }} cols={3} rowHeight={164}  >
            {urls.map((url) => (
                <ImageListItem key={url}>
                    <img
                        src={`${url}`}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
          </ImageList>
        }
    </Box>
  )
}
