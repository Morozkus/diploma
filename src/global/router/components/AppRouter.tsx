import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { firebaseAuth } from "@/global/firebase";
import { BasePage, Login } from "@/pages";

const AppRouter = () => {
    const [user] = useAuthState(firebaseAuth);

    const isAuth = Boolean(user);

    return (
        <BrowserRouter>
            {isAuth ? <AuthRoutes /> : <LoginRoutes />}
        </BrowserRouter>
    );
};

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<BasePage />} />
        </Routes>
    );
};

const LoginRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Login />} />
        </Routes>
    );
};

export default AppRouter;
