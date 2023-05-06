import React from "react";
import styles from "./burger-constructor.module.css"
import TotalCost from "./total-cost/total-cost";
import {useDispatch, useSelector} from "react-redux";

import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrop} from "react-dnd";

import classNames from "classnames";
import EmptyConstructorElement from "./empty-constructor-element/empty-constructor-element";
import {increaseConstructor} from "../../redux/features/constructor/constructorSlice";
import ConctructorCart from "./constructor-cart/conctructor-cart";
import {getConstructorIngredients} from "../../redux/features/constructor/constructor-selectors";
import {getIngredients} from "../../redux/features/ingredients/ingredients-selectors";

function BurgerConstructor() {
	const dispatch = useDispatch();
	const store= useSelector(getIngredients)
	const order = useSelector(getConstructorIngredients)
	const pieces = order.pieces;
	const bun = order.bun
	const isEmptyPieces=!order;
	const [{isHover}, dropTarget] = useDrop({
		accept: 'cart',
		drop(itemId) {
			const elem = store.find(item => item._id === itemId.id)
			return (dispatch(increaseConstructor(elem)))
		},
		collect: monitor => ({
			isHover: monitor.isOver(),
		})

	})

	const borderColor = isHover ? 'rgba(51, 51, 255, 0.25)' : 'transparent'

	const componentBun = (type) => {
		return (<div className={styles.bun}>
			{order.bun !== null ?
				<ConstructorElement
					key={bun._id + '1'}
					text={bun.name}
					type={type}
					price={bun.price}
					isLocked={true}
					thumbnail={bun.image_mobile}
				/> :
				<EmptyConstructorElement type={type} /> }
		</div>)
	}


	const componentPieces =
		<div className={styles.pieces}>
			{
				pieces.length > 0 ?
					pieces.map((elem,index) =>
						<ConctructorCart elem={elem} key={elem.constructorId} index={index}/>
					) :
					<div className={styles.pieces}>
						<EmptyConstructorElement type={''}/>
					</div>}
		</div>


	return (
		<div className={styles.constructor}>
			<div ref={dropTarget} className={classNames(
				styles.target,
				isHover && styles.targetIsHover,)} style={{borderColor}}>
				<div className={classNames(
					styles.list,
					isEmptyPieces && styles.emptyList
				)}>
					{componentBun('top')}
					{componentPieces}
					{componentBun("bottom")}
				</div>
			</div>
			<TotalCost/>
		</div>
	)
}

export default BurgerConstructor;