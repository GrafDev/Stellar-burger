import {digitsDefault} from "../../../../utils/themes";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useMemo, useState} from "react";
import PropTypes from "prop-types";
import {typeCart} from "../../../../utils/types";
import styles from "./cart.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useDrag} from "react-dnd";
import classNames from "classnames";
import {setToolCurrentIngredient} from "../../../../features/currentIngredient/currentIngredientSlice";


function Cart({cart}) {
	const dispatch = useDispatch();
	const handleClick = () => {
		console.log(cart)
		dispatch(setToolCurrentIngredient(cart))
	}

	const { pieces,bun } = useSelector(state=>state.constructorStore.ingredients)

	const count = useMemo(() => {
		if (cart.type === 'bun') {
			return bun?._id === cart._id ? 2 : 0
		} else {
			if (!cart) return 0
			return pieces?.filter(item => item._id === cart._id).length
		}
	}, [pieces, bun, cart])


	const id=cart._id;


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