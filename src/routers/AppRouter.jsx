import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'
import { useDispatch } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login } from '../store/auth/authSlice';

export const AppRouter = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		
		onAuthStateChanged(FirebaseAuth, (user)=>{
			if (user?.uid){
				dispatch(
					login( {displayName: user.displayName, email: user.email, uid: user.uid} )
				)
			}
		})
	}, [])
  

  return (
    
    <BrowserRouter basename= {import.meta.env.DEV ? '/' : '/journal-app-react'}>
    
        <Routes>
            <Route path='/auth/*' element={<AuthRouter />} />
            <Route path='/' element={<JournalScreen />} />
            <Route path='/*' element={ <Navigate to='/auth/login' /> } />
        </Routes>
    
    
    </BrowserRouter>
    
  )
}
