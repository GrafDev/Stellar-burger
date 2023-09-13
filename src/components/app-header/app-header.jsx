import React from 'react';
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import NavItem from "./nav-item/nav-item";
import {BURGER, LIST, PROFILE} from "../../utils/constants/ingredient-constants";
import {LIST_LINK,  PROFILE_LINK} from "../../utils/constants/router-link-constants";
import {useSelector} from "react-redux";
import {getAuth} from "../../redux/features/auth/auth-selectors";

function AppHeader() {
    const user= useSelector(getAuth).user
    let userName='';
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
                    <NavItem links={PROFILE_LINK} className={styles.LastNavItem} name={userName} id={PROFILE}/>
                </div>

                <div className={styles.logo}>
                    <Logo/>
                </div>
            </header>
        </div>
    )
}

export default AppHeader;