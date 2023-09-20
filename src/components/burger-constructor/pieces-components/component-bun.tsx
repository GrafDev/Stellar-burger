import styles from "./component-bun.module.css";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import EmptyConstructorElement from "../empty-constructor-element/empty-constructor-element";
import React, {FC} from "react";
import { TBun, TTypeBun} from "../../../utils/data-Types";
import {TOP} from "../../../utils/constants/ingredient-constants";

type TProps = {
    bun:TBun,
    type:TTypeBun
}

const Bun:FC<TProps> = (props:TProps ) => {
    const bun:TBun=props.bun
      const type:TTypeBun=props.type
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

export default Bun;


