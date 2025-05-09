import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { firebaseAuth } from '@/global/firebase'
import { BasePage, Teches, Tech, Login } from '@/pages'

const AppRouter = () => {
    const [user] = useAuthState(firebaseAuth)

    const isAuth = Boolean(user)

    return <BrowserRouter>
        {isAuth ? <AuthRoutes /> : <LoginRoutes />}
    </BrowserRouter>
}

const AuthRoutes = () => {
    return <Routes>
        <Route path='/' element={<BasePage />}>
            <Route>
                <Route index element={<Teches />} />
                <Route path=':techId'>
                    <Route index element={<Tech />} />
                    <Route path='edit' element={<Tech />} />
                </Route>
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