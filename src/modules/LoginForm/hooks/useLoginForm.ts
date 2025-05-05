import { RefObject, useState } from "react";
import { login } from "../api/login";
import { validateLoginEmail, validateLoginPassword } from "../helpers/validate";

export const useLoginForm = (emailInput: RefObject<HTMLInputElement | null>, passwordInput: RefObject<HTMLInputElement | null>) => {
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const validateField = (
        value: string | undefined,
        validator: (value: string) => boolean,
        errorMessage: string,
        setError: (message: string) => void
    ): boolean => {
        const isValid = value && validator(value);
        setError(isValid ? '' : errorMessage);
        return !!isValid;
    };

    const validateData = (): boolean => {
        const email = emailInput.current?.value;
        const password = passwordInput.current?.value;

        const isEmailValid = validateField(
            email,
            validateLoginEmail,
            "Неккоретный формат почты",
            setEmailErrorMessage
        );

        const isPasswordValid = validateField(
            password,
            validateLoginPassword,
            "Пароль должен состоять минимум из 6 символов!",
            setPasswordErrorMessage
        );

        return isEmailValid && isPasswordValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const isValid = validateData()

        if (isValid) return void 0

        const data = new FormData(event.currentTarget);
        const email = data.get("email")
        const password = data.get("password")

        if (email && password) {
            login(
                email.toString(),
                password.toString(),
                () => {
                    setEmailErrorMessage("Данный почтовый адрес не зарегистрирован")
                    setPasswordErrorMessage("Неправильный пароль")
                }
            )
        }
    }

    return {
        emailErrorMessage,
        passwordErrorMessage,
        handleSubmit
    }
}
