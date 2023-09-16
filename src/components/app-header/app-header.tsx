import React, {FC} from 'react';
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import NavItem from "./nav-item/nav-item";
import {BURGER, LIST, PROFILE} from "../../utils/constants/ingredient-constants";
import {LIST_LINK,  PROFILE_LINK} from "../../utils/constants/router-link-constants";
import {useSelector} from "react-redux";
import { getAuthUser} from "../../redux/features/auth/auth-selectors";
import {TAuthUser} from "../../redux/features/auth/authSlice";

const AppHeader:FC = ()=>{
    const user:TAuthUser= useSelector(getAuthUser)
    let userName:string='';
    if (!user || !user.hasOwnProperty('name')) {
        userName = 'Личный кабинет'
    } else {
        userName = user.name
    }

    return (
        <div className={styles.header}>
            <header className={'container'}>
                <div className={styles.navigationMenu}>
                    <NavItem links={'/'} name={'Конструктор'} id={BURGER}/>
                    <NavItem links={LIST_LINK} name={'Лента заказа'} id={LIST}/>
                    <div className={styles.LastNavItem}>
                        <NavItem links={PROFILE_LINK}  name={userName} id={PROFILE}/>
                    </div>
                </div>

                <div className={styles.logo}>
                    <Logo/>
                </div>
            </header>
        </div>
    )
}

export default AppHeader;