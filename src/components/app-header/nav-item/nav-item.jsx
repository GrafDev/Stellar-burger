import styles from "./nav-item.module.css";
import React from "react";
import {activeDefault, inactiveDefault} from "../../../utils/themes";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {BURGER, LIST, PROFILE} from "../../../utils/constants/ingredient-constants";
import {Link} from "react-router-dom";



const NavItem = (props) => {

	const {id, name,links} = props;
	const active=true; //TODO: next to check
	const icons = new Map()
	icons.set(BURGER, <BurgerIcon type={active ? 'primary' : 'secondary'}/>)
	icons.set(LIST, <ListIcon type={active ? 'primary' : 'secondary'}/>)
	icons.set(PROFILE, <ProfileIcon type={active ? 'primary' : 'secondary'}/>)


	return (
		<Link className={styles.navItem}  to={links}>
			<div>
				{icons.get(id)}
			</div>
			<span className={active ? activeDefault : inactiveDefault}>{name}</span>
		</Link>
	)
}
export default NavItem;

