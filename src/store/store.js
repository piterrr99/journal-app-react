import { configureStore } from '@reduxjs/toolkit';

// import { authReducer } from '../reducers/authReducer';

// const rootReducer = {
//     auth: authReducer
// }

// export const store = configureStore({ reducer: rootReducer })

import auth from './auth/authSlice';

const rootReducer = {
    auth 
};

export const store = configureStore({ reducer: rootReducer });