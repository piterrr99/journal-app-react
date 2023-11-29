import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import { useForm } from '../../hooks/useForm';
import {  startLoginEmailPassword } from '../../firebase/providers';




export const LoginScreen = () => {

  const { formState, handleInputChange } = useForm( {
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const {status, errorMessage} = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(()=> status === 'checking', [status])

  
  const { email, password } = formState;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginEmailPassword( email, password) );
  };
  

  return (
    <Container component='main' maxWidth='xs' sx={{ bgcolor: 'white', borderRadius: 2, ml: 2, mr: 2 }} >

      <Box
        sx={{

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        <Typography component='h1' variant='h5' sx={{ alignSelf: 'flex-start', mt: 2 }} >
          Login
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            fullWidth
            id='email'
            label='Correo'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={handleInputChange}
          />
          <TextField
            margin='normal'
            fullWidth
            name='password'
            label='Contraseña'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={handleInputChange}
          />
          <Button
            fullWidth
            type='submit'
            disabled={isCheckingAuthentication}
            variant='contained'
            sx={{ mt: 3, mb: 2,  bgcolor: 'primary.dark' }}
          >
            Login
          </Button>

          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2
          }} >
            <Link to='/auth/register'  >
              <Typography variant='subtitle2' >
                Crear una cuenta
              </Typography>

            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
