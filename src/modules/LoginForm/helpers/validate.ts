export const validateLoginEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

export const validateLoginPassword = (password: string) => password.length >= 6