import { Divider, List, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { SidebarEntry } from './SidebarEntry';

export const SidebarEntries = () => {

    const entries = [{ 
                        event: 'Enero', 
                        description: 'lorem ipsum una mona tremenda talla' 
                    }, { 
                        event: 'Febrero', 
                        description: 'lorem ipsum una mona tremenda talla' 
                    }];


    return (

        <div>
            <Toolbar>
                <Typography variant='h6'>
                    Pedro Hourrutiner
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {entries.map(({ event, description }) => (
                        <SidebarEntry key={event} event={event} description={description} />
                    ))}
            </List>

        </div>
    );

}
