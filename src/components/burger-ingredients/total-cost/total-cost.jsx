import {digitsMedium} from "../../../utils/themes";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useContext} from "react";
import PropTypes from "prop-types";
import styles from "./total-cost.module.css"
import contexts from "../../../utils/contexts";

function TotalCost() {

	const {openModal,total} = useContext(contexts);

	const handleClick = ()=>{
		openModal('Order');
	}

	return(
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