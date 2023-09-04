import HomePage from "../pages/home-page/home-page";
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import {
    FORGOT_PASSWORD_LINK,
    LOGIN_LINK,
    NOT_FOUND_LINK,
    PROFILE_LINK, PROFILE_ORDERS_LINK,
    REGISTER_LINK, RESET_PASSWORD_LINK
} from "../utils/constants/router-link-constants";
import LoginPage from "../pages/login-page/login-page";
import ProfilePage from "../pages/profile-page/profile-page";
import RegisterPage from "../pages/register-page/register-page";
import ResetPasswordPage from "../pages/reset-password-page/reset-password-page";
import ForgotPasswordPage from "../pages/forgot-password-page/forgot-password-page";
import ProtectedRoute from "./protected-route/protected-route";
import ProfileInfo from "../components/profile-Info/profile-info";
import OrderHistory from "../components/order-history/order-history";


const Routers = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage/>}/>
                {/*Header routers*/}
                <Route path={NOT_FOUND_LINK} element={<NotFoundPage/>}/>
                <Route path={PROFILE_LINK} element={<ProtectedRoute element={<ProfilePage/>} />}>
                    <Route path={PROFILE_LINK} element={<ProfileInfo/>}/>
                    <Route path={PROFILE_ORDERS_LINK} element={<OrderHistory/>}/>
                </Route>

                {/*Authentication routers*/}
                <Route path={LOGIN_LINK} element={<ProtectedRoute onlyUnAuth element={<LoginPage/>} />}/>
                <Route path={REGISTER_LINK} element={<ProtectedRoute onlyUnAuth element={<RegisterPage />} />}/>
                <Route path={RESET_PASSWORD_LINK} element={<ProtectedRoute onlyUnAuth element={<ResetPasswordPage/>} />}/>
                <Route path={FORGOT_PASSWORD_LINK} element={<ProtectedRoute onlyUnAuth element={<ForgotPasswordPage />} />}/>

            </Routes>

        </>
    )
}

export default Routers;
