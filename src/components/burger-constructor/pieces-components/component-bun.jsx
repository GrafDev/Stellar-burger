import styles from "./component-bun.module.css";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import EmptyConstructorElement from "../empty-constructor-element/empty-constructor-element";
import React from "react";
import PropTypes from "prop-types";
import {typeCart} from "../../../utils/types";
import {TOP} from "../../../utils/constants/ingredient-constants";

const Bun = ({bun,type} ) => {
     return (<div className={styles.bun}>
        {bun !== null ?
            <ConstructorElement
                key={bun._id + '1'}
                text={bun.name + (type===TOP?' (верх)':' (низ)')}
                type={type}
                price={bun.price}
                isLocked={true}
                thumbnail={bun.image_mobile}
            /> :
            <EmptyConstructorElement type={type} /> }
    </div>)
}

Bun.propTypes = {
    order:  PropTypes.oneOf([
        PropTypes.shape(typeCart).isRequired,
        undefined,
        null,
        ]),
    type:  PropTypes.string.isRequired,
}


export default Bun;


