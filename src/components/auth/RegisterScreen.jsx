import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { startRegisterWithNameEmailPassword } from '../../firebase/providers';


export const RegisterScreen = () => {

  const initialValues = {
    fullName: '',
    email: '',
    password: ''
  };

  const dispatch = useDispatch()

  const formValidations = {
    fullName: [(value)=>value.length>=1, 'Debe llenar este campo'],
    email: [(value)=>value.includes('@'), 'Debes introducir un correo'],
    password: [(value)=>value.length>=6, 'La contraseña debe tener al menos 6 caracteres']
  };

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    formState, fullName, email, password, handleInputChange, 
    isFormValid, fullNameValid, emailValid, passwordValid 
  }  = useForm( initialValues, formValidations )

  const {status, errorMessage} = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(()=> status === 'checking', [status])

  const handleSubmit = (event) => {
    
    event.preventDefault();
    setFormSubmitted(true);

    if(isFormValid){
      
      dispatch(startRegisterWithNameEmailPassword(fullName, email, password));
    }
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
                  error={!!fullNameValid && formSubmitted }
                  helperText={!!fullNameValid && formSubmitted && 'Debe llenar este campo'}
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
                  fullWidth
                  id="email"
                  label="Correo"
                  name="email"
                  autoComplete="email"
                  error={!!emailValid && formSubmitted}
                  helperText={!!emailValid && formSubmitted && 'Debe introducir una direccion de correo'}
                  onChange={handleInputChange}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  error={!!passwordValid && formSubmitted}
                  helperText={!!passwordValid && formSubmitted && 'La contraseña debe tener al menos 6 caracteres'}
                  onChange={handleInputChange}
                  value={password}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disabled={isCheckingAuthentication}
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
                    <Link to='/auth/login'>Ingresar</Link>
                  </Typography>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
 
  );
}