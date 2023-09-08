import HomePage from "../pages/home-page/home-page";
import {Route, Routes, useLocation} from "react-router-dom";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import {
    FORGOT_PASSWORD_LINK, INGREDIENT_PAGE_LINK,
    LOGIN_LINK,
    NOT_FOUND_LINK, ORDER_LINK,
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
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import IngredientPage from "../pages/ingredient-page/ingredients-page";
import OrderDetails from "../components/order-details/order-details";
import OrderHistory from "../components/order-history/order-history";


const Routers = () => {
    const location = useLocation()
    const background = location.state && location.state.background
    console.log('Routers', background, location)
    return (
        <>
            <Routes location={background || location}>
                <Route index element={<HomePage/>}/>
                {/*Header routers*/}
                <Route path={NOT_FOUND_LINK} element={<NotFoundPage/>}/>
                <Route path={PROFILE_LINK} element={<ProtectedRoute element={<ProfilePage/>}/>}>
                    <Route path={PROFILE_LINK} element={<ProfileInfo/>}/>
                    <Route path={PROFILE_ORDERS_LINK} element={<OrderHistory/>}/>
                </Route>

                {/* Ingredient details in a separate page */}
                <Route path={INGREDIENT_PAGE_LINK} element={<IngredientPage/>}/>
                <Route path={ORDER_LINK} element={<OrderDetails/>}/>

                {/*Authentication routers*/}
                <Route path={LOGIN_LINK} element={<ProtectedRoute onlyUnAuth element={<LoginPage/>}/>}/>
                <Route path={REGISTER_LINK} element={<ProtectedRoute onlyUnAuth element={<RegisterPage/>}/>}/>
                <Route path={RESET_PASSWORD_LINK}
                       element={<ProtectedRoute onlyUnAuth element={<ResetPasswordPage/>}/>}/>
                <Route path={FORGOT_PASSWORD_LINK}
                       element={<ProtectedRoute onlyUnAuth element={<ForgotPasswordPage/>}/>}/>
            </Routes>
            {!!background && (
                <Routes>

                    <Route path={INGREDIENT_PAGE_LINK} element={<IngredientDetails/>}/>
                    <Route path={ORDER_LINK} element={<OrderDetails/>}/>


                </Routes>
            )}

        </>
    )
}

export default Routers;
