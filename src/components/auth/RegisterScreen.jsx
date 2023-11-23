import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from '../../hooks/useForm';


export const RegisterScreen = () => {

  const initialValues = {
    fullName: 'Hernando',
    email: 'nando@gmail.com',
    password: '123456'
  }

  const [ formValues, handleInputChange ] = useForm( initialValues )
  const { fullName, email, password } = formValues


  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log({ fullName, email, password });
  };

  return (

      <Container component="main" maxWidth="xs" sx= {{ bgcolor: 'white', borderRadius: 2, ml: 2, mr: 2 }}>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5" sx={{ alignSelf: 'flex-start' }} >
            Crear cuenta
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Nombre completo"
                  onChange={handleInputChange}
                  value={fullName}
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  onChange={handleInputChange}
                  value={password}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Cuenta
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                
                  <Typography variant='subtitle2' sx={{ mb: 2 }} >
                    {'¿Ya tienes cuenta? '} 
                    <Link to='/journal-app-react/auth/login'>Ingresar</Link>
                  </Typography>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
 
  );
}