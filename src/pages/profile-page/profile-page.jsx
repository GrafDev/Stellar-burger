import {NavLink, Outlet} from "react-router-dom";
import styles from './profile-page.module.css'
import {PROFILE_LINK, PROFILE_ORDERS_LINK} from "../../utils/constants/router-link-constants";
import {inactiveDefault} from "../../utils/constants/text-style-constants";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/features/auth/authSlice";
import {useCallback} from "react";

const ProfilePage = () => {
const dispatch=useDispatch()
    const linkClassName = ({isActive}) => isActive ? styles.active : styles.link


    const handleLogoutButton = useCallback(() => {
        dispatch(logoutUser())
    }, [dispatch])

    return (
        <main className={classNames('container', styles.wrapper)}>
            <aside className={styles.aside}>
                <div className={styles.buttons}>
                    <NavLink className={linkClassName} to={PROFILE_LINK} end>
                        Профиль
                    </NavLink>

                    <NavLink className={linkClassName} to={PROFILE_ORDERS_LINK} end>
                        История заказов
                    </NavLink>

                    <NavLink className={linkClassName} to={'/'} onClick={handleLogoutButton}>
                        Выход
                    </NavLink>
                </div>

                <p className={inactiveDefault}>
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </aside>
            <Outlet/>
        </main>
    )
}
export default ProfilePage;