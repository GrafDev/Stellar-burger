import React, {useEffect} from "react";
import styles from "./burger-constructor.module.css"
import TotalCost from "./total-cost/total-cost";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/selectors/ingredients-selector";
import {getRandomInt} from "../../utils/random-funcs";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {EmptyConstructorElement} from "./empty-constructor-element/empty-constructor-element";
import {useDrop} from "react-dnd";
import {
	setDecreaseConstructorIngredients,
	setIncreaseConstructorIngredients
} from "../../services/action/constructor-ingredients-action";
import {getConstructorIngredients} from "../../services/selectors/constructor-ingredients-selector";
import classNames from "classnames";
import {setIncreaseCountIngredients} from "../../services/action/ingredients-action";

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

	return (
		<div className={styles.constructorWrapper}>
			<div ref={dropTarget} className={classNames(
				styles.list,
				isHover && styles.isHover,
			)} style={{borderColor}}>
				<div className={styles.bun}>
					{order.bun !== null &&
						<div key={bun._id + '1'}>
							<ConstructorElement          ///TODO: поменять на !==
								text={bun.name}
								type={'top'}
								price={bun.price}
								isLocked={true}
								thumbnail={bun.image_mobile}
							/>
						</div>
					}
					{order.bun === null &&
						<EmptyConstructorElement type={'top'} text={'Выберите булку'}/>
					}
				</div>
				<div className={styles.constructorList}>
					{pieces.length > 0 &&
						<div className={styles.pieces}>
							{pieces.map(elem =>        ///TODO: поменять на !==
								<div className={styles.piece} key={elem._id}>
									<div className={styles.icon}><DragIcon type="primary"/></div>
									<ConstructorElement
										text={elem.name}
										price={elem.price}
										isLocked={false}
										thumbnail={elem.image_mobile}
										handleClose={() => dispatch(setDecreaseConstructorIngredients(elem._id))}
									/>
								</div>
							)}
						</div>
					}
					{pieces.length === 0 &&
						<div className={styles.piece}>
							<EmptyConstructorElement text={'Выберите начинку'}/>
						</div>
					}
				</div>
				<div className={styles.bunBottom}>
					{order.bun !== null &&
						<div key={bun._id + '2'}>
							<ConstructorElement          ///TODO: поменять на !==
								text={bun.name}
								type={'bottom'}
								price={bun.price}
								isLocked={true}
								thumbnail={bun.image_mobile}
							/>
						</div>
					}
					{order.bun === null &&
						<EmptyConstructorElement type={'bottom'} text={'Выберите булку'}/>

					}
				</div>

			</div>
			<TotalCost/>
		</div>
	)
}

export default BurgerConstructor;