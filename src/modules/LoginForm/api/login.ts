import { firebaseAccountLogin } from "@/global/firebase/auth";

export const login = async (email: string, password: string, onError?: () => void) => {
    try {
        const data = await firebaseAccountLogin(email, password)

        return data
    } catch {
        onError?.()
    }
}