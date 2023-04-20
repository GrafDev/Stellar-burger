import {digitsDefault} from "../../../../utils/themes";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useContext, useMemo, useState} from "react";
import PropTypes from "prop-types";
import {typeCart} from "../../../../utils/types";
import styles from "./cart.module.css"
import {useDispatch, useSelector} from "react-redux";
import { setCurrentIngredient, setModalCurrentIngredient} from "../../../../services/action/current-ingredient-action";
import {useDrag} from "react-dnd";
import classNames from "classnames";
import {getIngredients} from "../../../../services/selectors/ingredients-selector";

function Cart(props) {
	const cart = props.cart;
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(setModalCurrentIngredient())
		dispatch(setCurrentIngredient(cart))
	}


	const ingredients=useSelector(getIngredients)

	const id=cart._id;

	const count=useMemo(()=>{
	return ingredients.filter(elem=>elem._id===cart._id)[0].count
	},[ingredients])


	const [{isDragging},dragRef] = useDrag({
		type:'cart',
		item: {id},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),

	});


	return (
		<div ref={dragRef} className= {classNames(
			styles.cart,
			isDragging && styles.onDrag,
			)} onClick={handleClick}>
			<div className={styles.image} ><img src={cart.image} alt={cart.name}/></div>
			<div className={styles.cost}>
				<div className={`${digitsDefault}`}>
					{cart.price}
				</div>
				<div className={styles.icons}>
					<CurrencyIcon type="primary"/>
				</div>
			</div>
			<div className= {classNames(
				styles.name,
				isDragging && styles.onDragText,
			)}>
				{cart.name}
			</div>
			{count>0 &&
			 <Counter count={count} size="default" />}
		</div>

	);
}

Cart.propTypes = {
	cart: PropTypes.shape(typeCart).isRequired
}

export default Cart;