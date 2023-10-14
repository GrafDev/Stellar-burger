import { Link, NavLink, useLocation } from "react-router-dom";
import { FC } from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from '../app-header/app-header.module.css';
import { useSelector } from '../../hooks/store-hooks';
import {PATH_FEED, PATH_HOME, PATH_PROFILE, PATH_PROFILE_ORDERS} from "../../utils/constants/path-constants";
import {activeDefault} from "../../utils/constants/text-style-constants";


const AppHeader: FC = () => {
  const location = useLocation();
  const user = useSelector(state => state.user.form);

  return (
    <header className={style.header}>
      <section className={style.header__wrapper}>
        <nav className={style.header__nav}>
          <ul className={`${style.header__navList} mt-4 mb-4`}>
            <li className='mr-2'>
              <NavLink to={PATH_HOME}
                className={location.pathname === String(PATH_HOME)
                  ? `${style.header__link__active} ${activeDefault} p-5`
                  : `${style.header__link__inactive} ${activeDefault} p-5`}>
                <BurgerIcon type={location.pathname === String(PATH_HOME)
                  ? 'primary'
                  : 'secondary'} />
                Конструктор
              </NavLink>
            </li>
            <li>
              <NavLink to={PATH_FEED}
                className={location.pathname === String(PATH_FEED)
                  ? `${style.header__link__active} ${activeDefault} p-5`
                  : `${style.header__link__inactive} ${activeDefault} p-5`}>
                <ListIcon type={location.pathname === String(PATH_FEED) ? 'primary' : 'secondary'} />
                Лента заказов
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to={PATH_HOME} className={style.header__logo}>
          <Logo />
        </Link>
        <div className={style.header__profile}>
          <NavLink to={PATH_PROFILE}
            className={location.pathname === String(PATH_PROFILE) || location.pathname === String(PATH_PROFILE_ORDERS)
              ? `${style.header__link__active} ${activeDefault} p-5`
              : `${style.header__link__inactive} ${activeDefault} p-5`}>
            <ProfileIcon type={location.pathname === String(PATH_PROFILE) || location.pathname === String(PATH_PROFILE_ORDERS) ? 'primary' : 'secondary'} />
            {user ? user?.name : `Личный кабинет`}
          </NavLink>
        </div>
      </section>
    </header>
  )
}

export default AppHeader;