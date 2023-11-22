import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types'

export const Navbar = ({ drawerWidth }) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed"
        sx= {{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JournalApp
          </Typography>
          
            <div>
              <IconButton
                size="large"                                            
                color='error'
              >
                <LogoutIcon />
              </IconButton>
              
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired
};