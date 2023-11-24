import { AuthErrorCodes, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { FirebaseAuth } from './config';
import authSlice, { checkingCredentials, doneCheckingButErrorsOcurred, login } from '../store/auth/authSlice';


export const startRegisterWithNameEmailPassword = (name, email, password)=>{

    return async(dispatch)=>{
        try {
            dispatch(checkingCredentials())
            const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            const {user} = resp;
            
            await updateProfile(user, {displayName: name})
   
            dispatch(
                login({email: user.email, displayName: user.displayName, uid: user.uid})
            )
            
        } catch (errorMessage) {
            console.log(errorMessage.code)
            dispatch(doneCheckingButErrorsOcurred())
        }
    }
}

export const startLoginEmailPassword = (email, password)=>{

    return async(dispatch) =>{
        try {
            dispatch(checkingCredentials())

            const {user} = await signInWithEmailAndPassword(FirebaseAuth, email, password);
            
            dispatch(
                login({email: user.email, displayName: user.displayName, uid: user.uid})
            );        

        } catch (error) {
            console.log(error.code)
            dispatch(doneCheckingButErrorsOcurred())
        }
    }
};
