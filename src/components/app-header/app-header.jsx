import React, {useState} from 'react';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import {inactiveDefault, activeDefault} from "../../utils/themes";
import NavItem from "./nav-item/nav-item";
import {getMenuItems} from "../../features/menu/menu-selector";
import {useSelector} from "react-redux";

function AppHeader() {
	const items=useSelector(getMenuItems)

	return (
		<div className={styles.header}>
			<div className={'container'}>
				<div className={styles.navigationMenu}>
					{items.map(item=>
						<NavItem id={item.id} active={item.active} name={item.name} key={item.id}/>
					)}
				</div>

				<div className={styles.logo}>
					<Logo/>
				</div>
			</div>


		</div>


	)
}

export default AppHeader;