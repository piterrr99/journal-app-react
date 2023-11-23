import * as React from 'react';
import Button from '@mui/material/Button';
import { Google } from '@mui/icons-material'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { login } from '../../store/auth/authSlice';
import { debuggedRedirectResult, startGoogleLogin, startLoginEmailPassword } from '../../firebase/providers';
import { useEffect } from 'react';


export const LoginScreen = () => {

  const [ formValues, handleInputChange ] = useForm( {
    email: 'nando@gmail.com',
    password: '123'
  });

  const dispatch = useDispatch();

  // useEffect(() => {
    
  //   dispatch(debuggedRedirectResult())
  
  // }, [])
  


  const { email, password } = formValues;

  const handleGoogleSignIn = ()=>{
    startGoogleLogin()
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginEmailPassword( 'email', 'password') );
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
            required
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
            required
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
            type='submit'
            variant='contained'
            sx={{ mt: 3, mb: 2, mr: '2%', bgcolor: 'primary.dark', width: '48%' }}
          >
            Login
          </Button>

          <Button
            onClick={handleGoogleSignIn}
            variant='contained'
            sx={{ mt: 3, mb: 2, ml: '2%', bgcolor: 'primary.dark', width: '48%' }}
          >
            <Google />
            <Typography
              variant='inherit'
              sx={{ ml: 1 }}
            >
              GOOGLE
            </Typography>

          </Button>

          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2
          }} >
            <Link to='/journal-app-react/auth/register'  >
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
