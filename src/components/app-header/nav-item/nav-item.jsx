import styles from "./nav-item.module.css";
import React, {useCallback, useMemo, useState} from "react";
import {activeDefault, inactiveDefault} from "../../../utils/constants/text-style-constants";
import {BurgerIcon, CurrencyIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {BURGER, LIST, PROFILE} from "../../../utils/constants/ingredient-constants";
import {Link, NavLink, useMatch} from "react-router-dom";


const NavItem = (props) => {
    const {id, name, links} = props;
    const icons = new Map()
    icons.set(BURGER, <BurgerIcon type=''/>)
    icons.set(LIST, <ListIcon type=''/>)
    icons.set(PROFILE, <ProfileIcon type=''/>)

    const className = ({isActive}) => {
        let _style = isActive ? activeDefault : inactiveDefault
        const isActiveIcon = isActive ? styles.active : styles.inactive
        _style = _style + ' ' + isActiveIcon + ' ' + styles.navItem
        return _style
    }


    return (
        <NavLink className={className}
                 to={links}>
            {icons.get(id)}
            {name}
        </NavLink>
    )
}
export default NavItem;

