import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { authTheme } from './authTheme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ authTheme } >
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
