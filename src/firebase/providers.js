import { AuthErrorCodes, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';


import { FirebaseAuth } from './config';
import authSlice, { checkingCredentials, doneCheckingButErrorsOcurred, login, logout } from '../store/auth/authSlice';
import Swal from 'sweetalert2';
import { logoutNotes } from '../store/notes/notesSlice';


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

            const errorMessage = (error.code === 'auth/wrong-password') 
                                                            ? 'La contraseña es incorrecta.'
                                                            : (error.code === 'auth/user-not-found') 
                                                                ? 'El usuario introducido no existe.'
                                                                : (error.code === 'auth/too-many-requests') 
                                                                    ? 'Demasiados intentos fallidos. Intente otra vez en un rato'
                                                                    : 'Han ocurrido errores'
            
            Swal.fire({
                icon: "error",
                title: "Error",
                text: errorMessage,
              });
            dispatch(doneCheckingButErrorsOcurred())
        }
    }
};


export const startLogout = () =>{
    return async(dispatch) => {
        try {
            await signOut(FirebaseAuth);

            dispatch( logout() );
            dispatch( logoutNotes() );
            
        } catch (error) {
            console.log(`ha ocurrido un error: ${error}`)
        }

    }
}