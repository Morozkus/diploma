import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyCVIo7pnMSZZEmbv11wfKQjOwN-qkUIiI0",
    authDomain: "diploma-102c0.firebaseapp.com",
    projectId: "diploma-102c0",
    storageBucket: "diploma-102c0.firebasestorage.app",
    messagingSenderId: "961805936158",
    appId: "1:961805936158:web:fa66feb0c2d53b9644300f",
    measurementId: "G-ZKZ5PTLEP6"
});

export const firebaseAuth = getAuth(firebaseApp)

export const firebaseAccountLogin = (email: string, password: string) => signInWithEmailAndPassword(firebaseAuth, email, password);

export const firebaseAccountLogOut = () => signOut(firebaseAuth);

export const firebaseStore = getFirestore(firebaseApp)


export default firebaseApp