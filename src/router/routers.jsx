import HomePage from "../pages/home-page/home-page";
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import {
    FORGOT_PASSWORD_LINK,
    INGREDIENT_LINK,
    LOGIN_LINK,
    NOT_FOUND_LINK,
    PROFILE_LINK,
    REGISTER_LINK, RESET_PASSWORD_LINK
} from "../utils/constants/router-link-constants";
import LoginPage from "../pages/login-page/login-page";
import ProfilePage from "../pages/profile-page/profile-page";
import RegisterPage from "../pages/register-page/register-page";
import IngredientsPage from "../pages/ingredients/ingredients-page";
import ResetPasswordPage from "../pages/reset-password-page/reset-password-page";
import ForgotPasswordPage from "../pages/forgot-password-page/forgot-password-page";
import AppHeader from "../components/app-header/app-header";


const Routers = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={NOT_FOUND_LINK} element={<NotFoundPage/>}/>
                <Route path={LOGIN_LINK} element={<LoginPage/>}/>
                <Route path={PROFILE_LINK} element={<ProfilePage/>}/>
                <Route path={REGISTER_LINK} element={<RegisterPage/>}/>
                <Route path={INGREDIENT_LINK} element={<IngredientsPage/>}/>
                <Route path={RESET_PASSWORD_LINK} element={<ResetPasswordPage/>}/>
                <Route path={FORGOT_PASSWORD_LINK} element={<ForgotPasswordPage/>}/>
            </Routes>

        </>
    )
}

export default Routers;
