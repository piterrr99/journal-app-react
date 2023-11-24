import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // checking, not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        errorMessage: null
    },
    reducers:{
        login: (state, { payload } )=> {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.errorMessage = null;
        },
        logout: ( state, { payload } )=>{
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) =>{
            state.status = 'checking'
        },
        doneCheckingButErrorsOcurred: (state) =>{
            state.status = 'not-authenticated'
        }
    }        
    
});

export const { login, logout, checkingCredentials, doneCheckingButErrorsOcurred } = authSlice.actions;
export default authSlice.reducer