import styles from "./nav-item.module.css";
import React from "react";
import {activeDefault, inactiveDefault} from "../../../utils/themes";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import {changeActiveMenu} from "../../../redux/features/menu/menuSlice";


let counter=0;

const NavItem = (props) => {

const dispatch=useDispatch();
	const {id, name, active} = props;
	const icons = new Map()
	icons.set('burger', <BurgerIcon type={active ? 'primary' : 'secondary'}/>)
	icons.set('list', <ListIcon type={active ? 'primary' : 'secondary'}/>)
	icons.set('profile', <ProfileIcon type={active ? 'primary' : 'secondary'}/>)

	const changeHandler=()=>{
		dispatch(changeActiveMenu(id))
	}


	return (
		<div className={styles.navItem} onClick={changeHandler}>
			<div>
				{icons.get(id)}
			</div>
			<span className={active ? activeDefault : inactiveDefault}>{name}</span>
		</div>
	)
}
export default NavItem;

