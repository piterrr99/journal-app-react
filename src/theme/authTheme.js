import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const authTheme = createTheme({

    palette: {
        primary: {
            main: '#212048'
        },
        secondary: {
            main: '#363636'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#212048'
        }
    }

})
