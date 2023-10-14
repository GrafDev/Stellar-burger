import { FC, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import style from '../app/app.module.css';
import AppHeader from '../app-header/app-header';
import { Home, Login, Register, ForgotPasswordPage, ResetPassword, NotFoundPage, Profile, Order, ProfileOrders } from '../../pages/index';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ProtectedRoute from '../protected-route/protected-route';
import Modal from '../modal/modal';
import { getIngredients } from '../../redux/actions/ingredients-actions';
import { getUser } from '../../redux/actions/user-actions';
import FeedPage from '../../pages/feed-page/feed-page';
import OrderInformation from '../order-information/order-information'
import ProfileInfo from '../profile-info/profile-info';
import { useSelector, useDispatch } from '../../hooks/store-hooks';
import { getCookie } from '../../utils/cookies';
import { REMOVE_SELECTED_INGREDIENT } from '../../types/constants-types/ingredients-types';

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
      ? (<h2 className={style.error}>Произошла ошибка 👽 попробуйте перезагрузить страницу</h2>) :
      (
        <>
          <AppHeader />
          <main>
            <Routes location={background || location}>
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/feed/:id" element={<Order data={orders} profile={false} />} />
              <Route path='/profile' element={<ProtectedRoute isPrivate element={<Profile />} />} >
                <Route path='' element={<ProfileInfo />}></Route>
                <Route path='orders' element={<ProfileOrders />}></Route>
              </Route >
              <Route path='/profile/orders/:id' element={<ProtectedRoute isPrivate element={<Order profile={true} data={authOrders} />} />} />
              <Route path="/login" element={<ProtectedRoute element={<Login />} />} />
              <Route path="/register" element={<ProtectedRoute element={<Register />} />} />
              <Route path="/forgot-Password" element={<ProtectedRoute element={<ForgotPasswordPage />} />} />
              <Route path="/reset-password" element={<ProtectedRoute element={<ResetPassword />} />} />
              <Route path="/ingredients/:id" element={<IngredientDetails />} />
              <Route path='/' element={<Home />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            {background &&
              <Routes>
                <Route path="/ingredients/:id" element={<Modal onClose={closeModal}> <IngredientDetails /></Modal>} />
                <Route path="/feed/:id" element={<Modal onClose={closeModal}><OrderInformation data={orders} modal={true} /></Modal>} />
                <Route path="/profile/orders/:id" element={<Modal onClose={closeModal}><OrderInformation data={authOrders} modal={true} /></Modal>} />
              </Routes>}
          </main >
        </>
      )

  )
}

export default App
