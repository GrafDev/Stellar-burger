import styles from "../constructor-footer.module.css";
import {digitsMedium} from "../../../../utils/constants/text-style-constants";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC, useMemo} from "react";
import {IConstructorIngredients} from "../../../../utils/data-Types";

type TProps={
    order:IConstructorIngredients
}

const TotalCost:FC<TProps> = (props:TProps) => {
    const order:IConstructorIngredients = props.order
    const total:number = useMemo(() => {
        const costBun:number = order.bun !== null ? order.bun.price * 2 : 0;
        const costPieces:number = order.pieces.length !== 0 ? order.pieces.reduce((acc, item) => acc + item.price, 0) : 0;
        return costPieces + costBun
    }, [order]);

    return (
        <div className={styles.total}>
            <div className={` ${digitsMedium}`}>
                {total}
            </div>
            <div className={styles.icon}>
                <CurrencyIcon type="primary"/>
            </div>
        </div>
    )
}

    export default TotalCost;