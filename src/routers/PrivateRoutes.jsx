import { Navigate } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';

export default function PrivateRoutes( {children} ) {
  
    const { status } = useSelector(state => state.auth)
    const isLoggedIn = status === 'authenticated' ? true : false  
    
    return isLoggedIn
                ? children
                : <Navigate to={'/login'} />
    
  
}
