import React from 'react';
import {Logo,BurgerIcon,ListIcon,ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { inactiveDefault, activeDefault} from "../../utils/themes";

function AppHeader(){
return (
    <div className={styles.header} >
        <div className={'container'}>
            <nav className={styles.nav}>
                <a href={''} >
                    <div >
                        <BurgerIcon type={'primary'}/>
                    </div>
                    <span className={activeDefault} >Конструктор</span>
                </a>
                <a href={''} >
                    <div >
                        <ListIcon type={'secondary'}/>
                    </div>
                    <span className={inactiveDefault} >Лента заказов</span>
                </a>
                <a href={''} >
                    <div >
                        <ProfileIcon  type={'secondary'}/>
                    </div>
                    <span className={inactiveDefault} >Личный кабинет</span>
                </a>
            </nav>

            <div className={styles.logo}>
                <Logo />
            </div>
        </div>


    </div>


)
}
export default AppHeader;