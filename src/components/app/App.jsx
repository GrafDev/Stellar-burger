import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./App.module.css";
import BurgerIngredients from '../burger-ingredient/burger-igredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {getIsModalOrder} from "../../services/selectors/order-selector";
import {getIsModalIngredient} from "../../services/selectors/current-ingredient-selector";
import {loadIngredients} from "../../services/action/ingredients-action";
import {
	getIngredientsHasError,
	getIngredientsIsLoading
} from "../../services/selectors/ingredients-selector";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import classNames from "classnames";
import {textLarge} from "../../utils/themes";
import {getToolIngredients} from "../../features/ingredients/ingredientsSlice";


function App() {

	const dispatch = useDispatch();
	// const isOrder = useSelector(getIsModalOrder)
	const isLoading = useSelector(state=>state.tollIngredients.isLoading)
	const hasError = useSelector(state=>state.tollIngredients.hasError)

	// const isIngredient = useSelector(getIsModalIngredient)
	const toolIngredient = useSelector(state=>state.tollIngredients.ingredients)
	// const isModal = isOrder || isIngredient;
	useEffect(() => {
		// dispatch(loadIngredients())
		{dispatch(getToolIngredients())}
	}, [dispatch])


	return (
		<div className={styles.App}>
			<AppHeader/>
			{isLoading && 'Загрузка...'}
			{hasError && 'Произошла ошибка'}
			{!isLoading &&
				!hasError &&
				<main className={classNames('container', styles.main)}>
					<DndProvider backend={HTML5Backend}>
						<div className={`${styles.title} ${textLarge}`}>Соберите бургер</div>
						<BurgerIngredients/>
						<BurgerConstructor/>
					</DndProvider>
				</main>

			}

			{/*{isModal &&*/}
			{/*	(<Modal>*/}
			{/*		<>*/}
			{/*			{isOrder && <OrderDetails/>}*/}
			{/*			{isIngredient && <IngredientDetails/>}*/}
			{/*		</>*/}
			{/*	</Modal>)*/}
			{/*}*/}
		</div>
	);
}

export default App;
