import {digitsDefault} from "../../../../utils/themes";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useContext} from "react";
import PropTypes from "prop-types";
import {typeCart} from "../../../../utils/types";
import styles from "./cart.module.css"
import {useDispatch} from "react-redux";
import { setCurrentIngredient, setModalCurrentIngredient} from "../../../../services/action/current-ingredient-action";

function Cart(props) {
	const cart = props.cart;
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(setModalCurrentIngredient())
		dispatch(setCurrentIngredient(cart))
	}

	return (
		<div className={styles.cart} onClick={handleClick}>
			{(props.bill > 0) ? <div className={`${styles.count} ${digitsDefault}`}>{props.bill}</div> : null}
			<img src={cart.image} alt={cart.name}/>
			<div className={styles.cost}>
				<div className={`${digitsDefault}`}>
					{cart.price}
				</div>
				<div className={styles.icons}>
					<CurrencyIcon type="primary"/>
				</div>
			</div>
			<div className={styles.name}>
				{cart.name}
			</div>
		</div>

	);
}

Cart.propTypes = {
	bill: PropTypes.number.isRequired,
	cart: PropTypes.shape(typeCart).isRequired
}

export default Cart;