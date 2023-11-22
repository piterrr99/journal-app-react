import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';

import { FirebaseAuth } from './config';
import authSlice, { login } from '../store/auth/authSlice';

const googleProvider = new GoogleAuthProvider

export const startLoginEmailPassword = (email, password)=>{

    return (dispatch) =>{

        setTimeout(() => {

            dispatch( login({ uid: 6368, displayName: 'Pedro' }) )

        }, 3500);
    }

};

export const startGoogleLogin = async()=>{

    const {user} = await signInWithPopup( FirebaseAuth, googleProvider );
    console.log(user);
    
    // signInWithRedirect( FirebaseAuth, googleProvider );        
        
}


export const debuggedRedirectResult = ()=>{
    
    return async(dispatch)=>{
        try{
            // const result = await getRedirectResult(FirebaseAuth);
            // console.log(result);
            // if(result){
            //     const { user } = result;
            //     dispatch( login({
            //                 uid: user.uid, 
            //                 displayName: user.displayName, 
            //                 email: user.email,
            //                 photoURL: user.photoURL
            //         }));
            // }
            const result = await getRedirectResult(FirebaseAuth);
            console.log(result);
            if(result){
                const { user } = result;
                dispatch( login({
                            uid: user.uid, 
                            displayName: user.displayName, 
                            email: user.email,
                            photoURL: user.photoURL
                    }));
            } 
        } catch (error) {
            console.log(error)
    }}
};