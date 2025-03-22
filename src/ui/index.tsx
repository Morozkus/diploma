import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Tech from './pages/Tech/TechEdit';
import Page from './pages';
import TechList from './pages/Tech/TechList';
import { firebaseAuth } from '../core/firebase';
import TechEdit from './pages/Tech/TechEdit';

const App = () => {
    const [user] = useAuthState(firebaseAuth)

    const isAuth = Boolean(user)

    return <BrowserRouter>
        <Routes>
            <Route element={<Page />}>
                {
                    isAuth && <>
                            <Route path='teches'>
                                <Route index element={<TechList />} />
                                <Route path=':techId'>
                                    <Route index element={<Tech />} />
                                    <Route path='edit' element={<TechEdit />} />
                                </Route>
                            </Route>
                        </>
                        
                }
            </Route>
            {!isAuth && <Route path='*' element={<Login />} />}
        </Routes>
    </BrowserRouter>
}

export default App
