import React, {useEffect} from "react";
import styles from "./burger-constructor.module.css"
import ConstructorParts from "./constructor-part/constructor-parts.jsx";
import TotalCost from "./total-cost/total-cost";
import {useSelector} from "react-redux";
import {getIngredients} from "../../services/selectors/ingredients-selector";
import {getRandomInt} from "../../utils/random-funcs";
import {emptyIngredient, typeCart} from "../../utils/types";


const fillConstructor = (_order) => {

	let _constructorData = {
		pieces: [],
		bun: null,

	}
	_constructorData.pieces = _order.filter(elem => elem.type !== 'bun')
	let buns = _order.filter(elem => elem.type === 'bun')
	_constructorData.bun = buns[getRandomInt(buns.length + 1) - 1]

	return _constructorData;
}

function BurgerConstructor() {
	const order = fillConstructor(useSelector(getIngredients))
	const pieces = order.pieces;
	const bun = order.bun

	return (


		<div className={styles.section}>
			<div className={styles.ingredients}>
				<div className={styles.bun}>
					<ConstructorParts type={'top'} piece={bun} key={bun.id}></ConstructorParts>
				</div>
				<div className={styles.pieces}>
					{pieces.map(elem =>
						<ConstructorParts type={''} piece={elem} key={elem._id}></ConstructorParts>
					)}
				</div>
				<div className={styles.bun}>
					<ConstructorParts type={'bottom'} piece={bun} key={bun.id}></ConstructorParts>
				</div>
			</div>

			<TotalCost/>

		</div>
	)
}

export default BurgerConstructor;