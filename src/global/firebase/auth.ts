import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseApp from ".";

export const firebaseAuth = getAuth(firebaseApp)

export const firebaseAccountLogin = (email: string, password: string) => signInWithEmailAndPassword(firebaseAuth, email, password);

export const firebaseAccountLogOut = () => signOut(firebaseAuth);