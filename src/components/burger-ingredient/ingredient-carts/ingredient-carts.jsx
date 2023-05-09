import React from "react";
import PropTypes from "prop-types";
import {typeCart} from "../../../utils/types";
import Cart from "./cart/cart";
import styles from "./ingredient-carts.module.css"


function IngredientCarts(props) {

	const carts = (props.data.filter(elem => elem.type === props.type))
	return (
		<div className={styles.carts}>
			{carts.map(cart =>
				<Cart cart={cart} key={cart._id}/>
			)
			}
		</div>
	)
}

IngredientCarts.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape(typeCart)).isRequired,
}

export default IngredientCarts;