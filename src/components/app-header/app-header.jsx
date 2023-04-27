import React from 'react';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import {inactiveDefault, activeDefault} from "../../utils/themes";
import NavItem from "./nav-item/nav-item";

function AppHeader() {


	return (
		<div className={styles.header}>
			<div className={'container'}>
				<div className={styles.navigationMenu}>

					<NavItem icon={(<BurgerIcon type={'primary'}/>)} _className={activeDefault}
					         text={'Конструктор'}/>
					<NavItem icon={(<ListIcon type={'primary'}/>)} _className={inactiveDefault}
					         text={'Лента заказов'}/>
					<NavItem icon={<ProfileIcon type={'primary'}/>} _className={inactiveDefault}
					         text={'Личный кабинет'}/>

				</div>

				<div className={styles.logo}>
					<Logo/>
				</div>
			</div>


		</div>


	)
}

export default AppHeader;