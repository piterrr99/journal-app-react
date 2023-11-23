import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
  return (
    
    <BrowserRouter>
    
        <Routes>
            <Route path='/journal-app-react/auth/*' element={<AuthRouter />} />
            <Route path='/journal-app-react' element={<JournalScreen />} />
            <Route path='/journal-app-react/*' element={ <Navigate to='/journal-app-react/auth/login' /> } />
        </Routes>
    
    
    </BrowserRouter>
    
  )
}
