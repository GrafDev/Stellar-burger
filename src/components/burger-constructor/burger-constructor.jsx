import React, {useEffect} from "react";
import styles from "./burger-constructor.module.css"
import TotalCost from "./total-cost/total-cost";
import {useSelector} from "react-redux";
import {getIngredients} from "../../services/selectors/ingredients-selector";
import {getRandomInt} from "../../utils/random-funcs";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {EmptyConstructorElement} from "./empty-constructor-element/empty-constructor-element";
import {useDrop} from "react-dnd";


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
	const [, dropTarget] = useDrop({
		accept: "animal",
		drop(itemId) {
			// onDropHandler(itemId);
		},
	})

	return (


		<div className={styles.section}>
			<div  ref={dropTarget} className={styles.ingredients}>
				<div className={styles.bun} key={bun._id+'1'}>
					{order.bun===null ?<ConstructorElement
						text={bun.name}
						type={'top'}
						price={bun.price}
						isLocked={true}
						thumbnail={bun.image_mobile}
					/>
					:<EmptyConstructorElement type={'top'} text={'Выберите булку'}/> }
				</div>
				<div className={styles.pieces}>
					{pieces===null && pieces.map(elem =>
						<div className={styles.piece} key={elem._id}>
							<div className={styles.icon}><DragIcon type="primary"/> </div>
								<ConstructorElement
									text={elem.name}
									price={elem.price}
									isLocked={true}
									thumbnail={elem.image_mobile}
								/>
						</div>
					)}
					{pieces!==null && <EmptyConstructorElement text={'Выберите начинку'}/>  }
				</div>
				<div className={styles.bun} key={bun._id+'2'}>
					{order.bun===null ?<ConstructorElement
						text={bun.name}
						type={'bottom'}
						price={bun.price}
						isLocked={true}
						thumbnail={bun.image_mobile}
					/>: <EmptyConstructorElement type={'bottom'} text={'Выберите булку'}/>}
				</div>
			</div>

			<TotalCost/>

		</div>
	)
}

export default BurgerConstructor;