import { Navigate } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';

export const PublicRoutes = ( {children} )=>{

    const { status } = useSelector(state => state.auth)
    const isLoggedIn = status === 'authenticated' ? true : false  

    return isLoggedIn
                ? <Navigate to={'/'} />
                : children
}