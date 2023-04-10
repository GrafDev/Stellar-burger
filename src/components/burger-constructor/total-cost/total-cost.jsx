import {digitsMedium} from "../../../utils/themes";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useContext} from "react";
import styles from "./total-cost.module.css"
import {setModalOrder, setOrderId} from "../../../services/action/oreder-action";
import {useDispatch, useSelector} from "react-redux";
import {getConstructorIngredients} from "../../../services/selectors/constructor-ingredients-selector";
import {orderReducer} from "../../../services/reducers/order-reducer";

function TotalCost() {

	const order=useSelector(getConstructorIngredients)
	const costBun=order.bun!==null ?order.bun.price*2 : 0;
	const costPieces=order.pieces.length!==0? order.pieces.reduce((acc,item)=>acc+item.price ,0):0;
	const total=costPieces+costBun;
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(setOrderId())
		dispatch(setModalOrder())
	}

	return (
		<div className={styles.button}>
			<div className={styles.total}>
				<div className={` ${digitsMedium}`}>
					{total}
				</div>
				<div className={styles.icon}>
					<CurrencyIcon type="primary"/>
				</div>
			</div>
			<Button htmlType="button" type="primary" size="large" onClick={handleClick}>
				Оформить заказ
			</Button>
		</div>
	)
}

export default TotalCost;