import { RefObject, useState } from "react";
import { login } from "../api/login";
import { validateLoginEmail, validateLoginPassword } from "../helpers/validate";

interface LoginFieldError {
    hasError: boolean
    errorMessage: string
}

export const useLoginForm = (emailInput: RefObject<HTMLInputElement | null>, passwordInput: RefObject<HTMLInputElement | null>) => {
    const [emailError, setEmailError] = useState<LoginFieldError>({ hasError: false, errorMessage: "" });
    const [passwordError, setPasswordError] = useState<LoginFieldError>({ hasError: false, errorMessage: "" });

    const validateField = (
        value: string | undefined,
        validator: (value: string) => boolean,
        errorMessage: string,
        setError: (error: LoginFieldError) => void
    ): boolean => {
        const isValid = Boolean(value && validator(value));

        setError(isValid ? { hasError: false, errorMessage: '' } : { hasError: true, errorMessage });

        return isValid;
    };

    const validateData = (): boolean => {
        const email = emailInput.current?.value;
        const password = passwordInput.current?.value;

        const isEmailValid = validateField(
            email,
            validateLoginEmail,
            "Неккоретный формат почты",
            setEmailError
        );

        const isPasswordValid = validateField(
            password,
            validateLoginPassword,
            "Пароль должен состоять минимум из 6 символов!",
            setPasswordError
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
                    setEmailError({hasError: true, errorMessage: "Данный почтовый адрес не зарегистрирован"})
                    setPasswordError({hasError: true, errorMessage: "Неправильный пароль"})
                }
            )
        }
    }

    return {
        emailError,
        passwordError,
        handleSubmit
    }
}
