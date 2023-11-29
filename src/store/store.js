import { configureStore } from '@reduxjs/toolkit';

// import { authReducer } from '../reducers/authReducer';

// const rootReducer = {
//     auth: authReducer
// }

// export const store = configureStore({ reducer: rootReducer })

import auth from './auth/authSlice';
import notes from './notes/notesSlice'

const rootReducer = {
    auth,
    notes 
};

export const store = configureStore({ reducer: rootReducer });