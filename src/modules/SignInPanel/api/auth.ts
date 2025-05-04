import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseAuth } from "../../../global/firebase";

export const firebaseAccountLogin = (email: string, password: string) => signInWithEmailAndPassword(firebaseAuth, email, password);

export const firebaseAccountLogOut = () => signOut(firebaseAuth);