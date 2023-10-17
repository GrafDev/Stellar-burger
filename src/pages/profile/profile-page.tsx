import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FC } from 'react';
import style from './profile-page.module.css';
import { logout } from '../../redux/actions/user-actions';
import { useDispatch } from '../../hooks/store-hooks';
import {activeDefault, textMedium} from "../../utils/constants/text-style-constants";
import {PATH_PROFILE, PATH_PROFILE_ORDERS} from "../../utils/constants/path-constants";

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout())
  }

  const descriptionPage = location.pathname === String(PATH_PROFILE)
    ? <p className={`${activeDefault} ${style.profile__text}`}>В этом разделе вы можете изменить&nbsp;свои персональные данные</p>
    : <p className={`${activeDefault} ${style.profile__text}`}>В этом разделе вы можете просмотреть свою историю заказов</p>

  return (
    <div className={`${style.profile__container}`}>
      <section className={`${style.profile__wrapper} mr-15 mb-30`}>
        <nav className={`${style.profile__nav} mb-20`}>
          <NavLink to={PATH_PROFILE}
            className={location.pathname === String(PATH_PROFILE)
              ? `${style.profile__link__active} ${textMedium}`
              : `${style.profile__link__inactive} ${textMedium}`}>
            Профиль
          </NavLink>
          <NavLink to={PATH_PROFILE_ORDERS}
            className={location.pathname === String(PATH_PROFILE_ORDERS)
              ? `${style.profile__link__active} ${textMedium}`
              : `${style.profile__link__inactive} ${textMedium}`}>
            История заказов
          </NavLink>
          <p onClick={handleLogout} className={`${style.profile__link__inactive} ${textMedium}`}>выход</p>
        </nav>
        {descriptionPage}
      </section >
      <Outlet />
    </div>
  )
}

export default ProfilePage