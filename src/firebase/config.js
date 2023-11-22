import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBNBM87mXqXK7-ZyC9kv1Y2dPqlAwu7lZ8",
    authDomain: "react-app-practice-31b4e.firebaseapp.com",
    projectId: "react-app-practice-31b4e",
    storageBucket: "react-app-practice-31b4e.appspot.com",
    messagingSenderId: "837603715968",
    appId: "1:837603715968:web:2b73320c6214e91db52f65"
};
  

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);