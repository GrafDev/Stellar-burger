import {digitsMedium} from "../../../utils/constants/text-style-constants";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useMemo} from "react";
import styles from "./total-cost.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setToolOrder} from "../../../redux/features/order/orderSlice";
import {getConstructorIngredients} from "../../../redux/features/constructor/constructor-selectors";


function TotalCost() {
	const order=useSelector(getConstructorIngredients)
	const total=useMemo(()=>{
		const costBun=order.bun!==null ?order.bun.price*2 : 0;
		const costPieces= order.pieces.length!==0? order.pieces.reduce((acc,item)=>acc+item.price ,0):0;
		return costPieces+costBun
	},[order]);


	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(setToolOrder())
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