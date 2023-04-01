import React, {useEffect} from "react";
import styles from "./burger-constructor.module.css"
import TotalCost from "./total-cost/total-cost";
import {useSelector} from "react-redux";
import {getIngredients} from "../../services/selectors/ingredients-selector";
import {getRandomInt} from "../../utils/random-funcs";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";


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
				<div className={styles.bun} key={bun.id}>
					<ConstructorElement
						text={bun.name}
						type={'top'}
						price={bun.price}
						isLocked={true}
						thumbnail={bun.image_mobile}
					/>
				</div>
				<div className={styles.pieces}>
					{pieces.map(elem =>
						<div className={styles.piece} key={elem.id}>
							<div className={styles.icon}><DragIcon type="primary"/> </div>
								<ConstructorElement
									text={elem.name}
									price={elem.price}
									isLocked={true}
									thumbnail={elem.image_mobile}
								/>
						</div>
					)}
				</div>
				<div className={styles.bun} key={bun.id+'2'}>
					<ConstructorElement
						text={bun.name}
						type={'bottom'}
						price={bun.price}
						isLocked={true}
						thumbnail={bun.image_mobile}
					/>
				</div>
			</div>

			<TotalCost/>

		</div>
	)
}

export default BurgerConstructor;