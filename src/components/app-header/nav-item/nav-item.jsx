import styles from "./nav-item.module.css";
import React from "react";


const NavItem = (props) => {
	const {icon, text, _className} = props;
	return (
		<a href={''} className={styles.navItem}>
			<div>
				{icon}
			</div>
			<span className={_className}>{text}</span>
		</a>
	)
}
export default NavItem;

