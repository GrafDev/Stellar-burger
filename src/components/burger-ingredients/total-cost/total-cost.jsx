import {digitsMedium} from "../../../utils/themes";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useContext} from "react";
import styles from "./total-cost.module.css"
import contexts from "../../../utils/contexts";
import {SET_MODAL_ORDER, SET_ORDER_ID} from "../../../services/action/oreder-action";
import {useDispatch} from "react-redux";

function TotalCost() {

	const {total} = useContext(contexts);
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch({type: SET_ORDER_ID})
		dispatch({type: SET_MODAL_ORDER})
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