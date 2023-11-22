import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types'

import { SidebarEntries } from './SidebarEntries';


export const Sidebar = ( {drawerWidth} ) => {

  return (
  <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <SidebarEntries />
        </Drawer>
      </Box>
  )};

  Sidebar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
  };