import styles from "../constructor-footer.module.css";
import {digitsMedium} from "../../../../utils/constants/text-style-constants";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useMemo} from "react";
import PropTypes from "prop-types";
import {typeCart} from "../../../../utils/types";

const TotalCost = ({order}) => {
    console.log(order, 'order')
    const total = useMemo(() => {
        const costBun = order.bun !== null ? order.bun.price * 2 : 0;
        const costPieces = order.pieces.length !== 0 ? order.pieces.reduce((acc, item) => acc + item.price, 0) : 0;
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

TotalCost.propTypes = {
    order: PropTypes.shape({
        bun: PropTypes.shape(typeCart),
        pieces: PropTypes.arrayOf(PropTypes.shape(typeCart)),
    })
}
    export default TotalCost;