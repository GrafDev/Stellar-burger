import React, {useEffect} from "react";
import styles from "./burger-constructor.module.css"
import TotalCost from "./total-cost/total-cost";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/selectors/ingredients-selector";
import {getRandomInt} from "../../utils/random-funcs";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrop} from "react-dnd";
import {
	setDecreaseConstructorIngredients,
	setIncreaseConstructorIngredients
} from "../../services/action/constructor-ingredients-action";
import {getConstructorIngredients} from "../../services/selectors/constructor-ingredients-selector";
import classNames from "classnames";
import {setDecreaseCountIngredients, setIncreaseCountIngredients} from "../../services/action/ingredients-action";
import EmptyConstructorElement from "./empty-constructor-element/empty-constructor-element";

function BurgerConstructor() {
	const store = useSelector(getIngredients)
	const dispatch = useDispatch();
	const order = useSelector(getConstructorIngredients)
	const pieces = order.pieces;
	const bun = order.bun
	const [{isHover}, dropTarget] = useDrop({
		accept: 'cart',
		drop(itemId) {
			const elem = store.filter(item => item._id === itemId.id)

			return (dispatch(setIncreaseConstructorIngredients(elem[0])),
				dispatch(setIncreaseCountIngredients(elem[0]._id)))
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
				<EmptyConstructorElement type={type}/>}
		</div>)
	}

	const componentPieces =
		<div className={styles.pieces}>
			{
				pieces.length > 0 ?
					pieces.map(elem =>
						<div className={styles.piece} key={elem.constructorId}>
							<div className={styles.icon}><DragIcon type="primary"/></div>
							<ConstructorElement
								text={elem.name}
								price={elem.price}
								isLocked={false}
								thumbnail={elem.image_mobile}
								handleClose={() => {
									dispatch(setDecreaseConstructorIngredients(elem.constructorId))
									dispatch(setDecreaseCountIngredients(elem._id))
								}}
							/>
						</div>
					) :
					<div className={styles.piece}>
						<EmptyConstructorElement type={''}/>
					</div>}
		</div>


	return (
		<div className={styles.constructor}>
			<div ref={dropTarget} className={classNames(
				styles.target,
				isHover && styles.targetIsHover,)} style={{borderColor}}>
				<div className={styles.list}>
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