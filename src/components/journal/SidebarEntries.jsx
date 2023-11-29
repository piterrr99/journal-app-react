import { Divider, List, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { SidebarEntry } from './SidebarEntry';
import { useSelector } from 'react-redux';

export const SidebarEntries = () => {

    const { displayName } = useSelector( state => state.auth )

   const {notes} = useSelector( state=> state.notes )


    return (

        <div>
            <Toolbar>
                <Typography variant='h6'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                    notes.map( note=> (
                       
                        <SidebarEntry 
                            key={note.id}
                            {...note}
                        />
                    ))
                }
            </List>

        </div>
    );

}
