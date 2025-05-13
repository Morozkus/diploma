import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { firebaseAuth } from '@/global/firebase'
import { BasePage, Teches, Login } from '@/pages'

const AppRouter = () => {
    const [user] = useAuthState(firebaseAuth)

    const isAuth = Boolean(user)

    return <BrowserRouter>
        {isAuth ? <AuthRoutes /> : <LoginRoutes />}
    </BrowserRouter>
}

const AuthRoutes = () => {
    return <Routes>
        <Route path='*' element={<BasePage />}>
            <Route>
                <Route index element={<Teches />} />
            </Route>
        </Route>
    </Routes>
}

const LoginRoutes = () => {
    return <Routes>
        <Route path='*' element={<Login />} />
    </Routes>
}

export default AppRouter