import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export const SidebarEntry = ( {event, description} ) => {
  return (
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <BookmarkBorderIcon />
            </ListItemIcon>
            <ListItemText primary={event} secondary={description} />
        </ListItemButton>
    </ListItem>
  )
};
