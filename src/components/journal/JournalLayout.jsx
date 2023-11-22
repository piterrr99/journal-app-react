import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Navbar } from '../ui/Nabvar';
import { Sidebar } from './Sidebar';
import { FloatingButton } from '../ui/FloatingButton';

const drawerWidth = 300;

export const JournalLayout = ( {children} ) => {
  
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <CssBaseline />
        <Navbar drawerWidth={drawerWidth} />
        <Sidebar drawerWidth={drawerWidth} />
        <Box
            component="main"
            sx={{ flexGrow: 1, m: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar />
            { children }
        </Box>
        <FloatingButton />
    </Box>
  );
}
