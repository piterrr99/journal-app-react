import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNotes } from '../../store/notes/notesSlice';

export const SidebarEntry = ( {date, title, body, id, urls} ) => {
  
  const dispatch = useDispatch();

  const {active} = useSelector(state=> state.notes)

  const handleEntryClick = ()=>{

    dispatch(activeNotes( {id, title, body, date, urls} ))

  }

  return (
    <ListItem disablePadding onClick={handleEntryClick}>
        <ListItemButton>
            <ListItemIcon>
                { ( active && active.id === id) ? <BookmarkIcon color='primary' /> : <BookmarkBorderIcon />}
            </ListItemIcon>
            <ListItemText primary={title} secondary={body} />
        </ListItemButton>
    </ListItem>
  )
};

