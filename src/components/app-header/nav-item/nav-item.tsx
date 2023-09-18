import styles from "./nav-item.module.css";
import React, {FC} from "react";
import {activeDefault, inactiveDefault} from "../../../utils/constants/text-style-constants";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {BURGER, LIST, PROFILE} from "../../../utils/constants/ingredient-constants";
import {NavLink} from "react-router-dom";

type TProps = {
    id: string,
    name: string,
    links: string,
}

const NavItem:FC<TProps> = (props:TProps) => {
    const id:string= props.id;
    const name:string = props.name;
    const links:string = props.links;
    const icons:Map<any,any> = new Map()
    icons.set(BURGER, <BurgerIcon type='secondary'/>)
    icons.set(LIST, <ListIcon type='secondary'/>)
    icons.set(PROFILE, <ProfileIcon type='secondary'/>)

    const _className = ({isActive}:{ isActive: boolean }) => {
        let _style:string = isActive ? activeDefault : inactiveDefault
        const isActiveIcon:string = isActive ? styles.active : styles.inactive
        _style = _style + ' ' + isActiveIcon + ' ' + styles.navItem
        return _style
    }


    return (
        <NavLink className={_className}
                 to={links}>
            {icons.get(id)}
            {name}
        </NavLink>
    )
}


export default NavItem;

