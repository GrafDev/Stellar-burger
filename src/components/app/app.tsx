import { FC, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import style from '../app/app.module.css';
import AppHeader from '../app-header/app-header';
import { Home, Login, Register, ForgotPasswordPage, ResetPassword, NotFoundPage, Profile, Order, ProfileOrders } from '../../pages/index';
import IngredientsDetails from '../ingredients/ingredients-details/ingredients-details';
import ProtectedRoute from '../../route/protected-route/protected-route';
import Modal from '../modal/modal';
import { getIngredients } from '../../redux/actions/ingredients-actions';
import { getUser } from '../../redux/actions/user-actions';
import FeedPage from '../../pages/feed-page/feed-page';
import OrderInformation from '../order-information/order-information'
import ProfileInfo from '../profile-info/profile-info';
import { useSelector, useDispatch } from '../../hooks/store-hooks';
import { getCookie } from '../../utils/cookies';
import { REMOVE_SELECTED_INGREDIENT } from '../../types/constants-types/ingredients-types';
import {
  PATH_FEED,
  PATH_FEED_ID,
  PATH_FORGOT_PASSWORD,
  PATH_HOME,
  PATH_INGREDIENTS_DETAILS, PATH_LOGIN,
  PATH_NOT_FOUND, PATH_PROFILE, PATH_PROFILE_ORDERS_ID, PATH_REGISTER,
  PATH_RESET_PASSWORD, PATH_TO_PROFILE_INFO, PATH_TO_PROFILE_ORDERS
} from "../../utils/constants/path-constants";
import {textLarge} from "../../utils/constants/text-style-constants";

const App: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { error } = useSelector((state) => state.ingredients);
  const { orders } = useSelector(state => state.wsOrders);
  const { authOrders } = useSelector(state => state.wsAuthOrders);
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredients())
    if (getCookie("accessToken")) {
      dispatch(getUser())
    }
  }, [dispatch])

  const closeModal = () => {
    dispatch({
      type: REMOVE_SELECTED_INGREDIENT
    })
    navigate(-1)
  }

  return (
    error
      ? (<div className={`${style.error} ${textLarge}`}>Ошибочка вышла, попробуйте перегрузить страницу.</div>) :
      (
        <>
          <AppHeader />
          <main >
            <Routes location={background || location}>
              <Route path={PATH_FEED} element={<FeedPage />} />
              <Route path={PATH_FEED_ID} element={<Order data={orders} profile={false} />} />
              <Route path={PATH_PROFILE} element={<ProtectedRoute isPrivate element={<Profile />} />} >
                <Route path={PATH_TO_PROFILE_INFO} element={<ProfileInfo />}></Route>
                <Route path={PATH_TO_PROFILE_ORDERS} element={<ProfileOrders />}></Route>
              </Route >
              <Route path={PATH_PROFILE_ORDERS_ID} element={<ProtectedRoute isPrivate element={<Order profile={true} data={authOrders} />} />} />
              <Route path={PATH_LOGIN} element={<ProtectedRoute element={<Login />} />} />
              <Route path={PATH_REGISTER} element={<ProtectedRoute element={<Register />} />} />
              <Route path={PATH_FORGOT_PASSWORD} element={<ProtectedRoute element={<ForgotPasswordPage />} />} />
              <Route path={PATH_RESET_PASSWORD} element={<ProtectedRoute element={<ResetPassword />} />} />
              <Route path={PATH_INGREDIENTS_DETAILS} element={<IngredientsDetails />} />
              <Route path={PATH_HOME} element={<Home />} />
              <Route path={PATH_NOT_FOUND} element={<NotFoundPage />} />
            </Routes>
            {background &&
              <Routes>
                <Route path={PATH_INGREDIENTS_DETAILS} element={<Modal onClose={closeModal}> <IngredientsDetails /></Modal>} />
                <Route path={PATH_FEED_ID} element={<Modal onClose={closeModal}><OrderInformation data={orders} modal={true} /></Modal>} />
                <Route path={PATH_PROFILE_ORDERS_ID} element={<Modal onClose={closeModal}><OrderInformation data={authOrders} modal={true} /></Modal>} />
              </Routes>}
          </main >
        </>
      )

  )
}

export default App
