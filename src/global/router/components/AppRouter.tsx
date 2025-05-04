import { Login } from '@mui/icons-material'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { firebaseAuth } from '@/global/firebase'
import { BasePage, TechList, TechItem } from '@/pages'

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
                <Route index element={<TechList />} />
                <Route path=':techId'>
                    <Route index element={<TechItem />} />
                    <Route path='edit' element={<TechItem />} />
                </Route>
            </Route>
        </Route>
    </Routes>
}

const LoginRoutes = () => {
    return <Routes>
        <Route path='/' element={<Login />} />
    </Routes>
}

export default AppRouter