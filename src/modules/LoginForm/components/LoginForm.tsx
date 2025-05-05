import LoginContainer from './LoginContainer'
import { HeaderText } from '@/ui/Text'
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useLoginForm } from '../hooks/useLoginForm';

const LoginForm = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const { emailErrorMessage, passwordErrorMessage, handleSubmit } = useLoginForm(emailRef, passwordRef)

    const emailError = Boolean(emailErrorMessage)
    const passwordError = Boolean(passwordErrorMessage)

    return <LoginContainer>
        <HeaderText>
            Авторизация
        </HeaderText>
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
            }}
        >
            <FormControl>
                <FormLabel htmlFor="email">Почта</FormLabel>
                <TextField
                    inputRef={emailRef}
                    error={Boolean(emailErrorMessage)}
                    helperText={emailErrorMessage}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@mail.ru"
                    autoComplete="email"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={emailError ? 'error' : 'primary'}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="password">Пароль</FormLabel>
                <TextField
                    inputRef={passwordRef}
                    error={passwordError}
                    helperText={passwordErrorMessage}
                    name="password"
                    placeholder="••••••"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={passwordError ? 'error' : 'primary'}
                />
            </FormControl>
            <Button
                type="submit"
                fullWidth
                variant="contained"
            >
                Войти
            </Button>
        </Box>
    </LoginContainer>
}

export default LoginForm