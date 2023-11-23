import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';

import { FirebaseAuth } from './config';
import authSlice, { login } from '../store/auth/authSlice';

const googleProvider = new GoogleAuthProvider

export const startLoginEmailPassword = (email, password)=>{

    return (dispatch) =>{

        setTimeout(() => {

            dispatch( login({ email: 'pedro@gmail.com', displayName: 'Pedro' }) )

        }, 3500);
    }

};
