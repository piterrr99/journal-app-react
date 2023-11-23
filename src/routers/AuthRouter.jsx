import { Box } from '@mui/material';
import { Navigate, Routes, Route } from 'react-router-dom';
import React from 'react';


import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';


export const AuthRouter = () => {
    return (
        
        
            <Box sx={{ 
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw'
                }}
            >
                <Routes>
                    <Route path = 'login' element={ <LoginScreen /> } />
                    <Route path='register' element={ <RegisterScreen /> } />
                    <Route path='*' element={ <Navigate to='/auth/login' /> } />
                </Routes>
            </Box>
                    
        
    );
};
