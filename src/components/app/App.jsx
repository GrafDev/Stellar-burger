import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./App.module.css";
import BurgerIngredients from '../burger-ingredient/burger-igredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import classNames from "classnames";
import {textLarge} from "../../utils/themes";
import {getIngredients} from "../../features/ingredients/ingredientsSlice";
import Spinner from "../spinner/spinner";
import {getHasError, getIsLoading} from "../../features/ingredients/ingredients-selectors";
import {getIsModalOrder} from "../../features/order/order-selectors";
import {getIsModalIngredient} from "../../features/currentIngredient/current-ingredient-selectors";


function App() {

	const dispatch = useDispatch();
	const isOrder = useSelector(getIsModalOrder)
	const isLoading = useSelector(getIsLoading)
	const hasError = useSelector(getHasError)

	const isIngredient = useSelector(getIsModalIngredient)
	const isModal = isOrder || isIngredient;

	useEffect(() => {
		{dispatch(getIngredients())}
	}, [dispatch])


	return (
		<div className={styles.App}>
			<AppHeader/>
			{isLoading && <Spinner/>}
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

			{isModal &&
				(<Modal>
					<>
						{isOrder && <OrderDetails/>}
						{isIngredient && <IngredientDetails/>}
					</>
				</Modal>)
			}
		</div>
	);
}

export default App;
