import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import style from "./App.module.css";
import BurgerIgredients from '../burger-ingredient/burger-igredients';
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


function App() {

	const dispatch = useDispatch();
	const isOrder = useSelector(getIsModalOrder)
	const isLoading = useSelector(getIngredientsIsLoading)
	const hasError = useSelector(getIngredientsHasError)
	const isIngredient = useSelector(getIsModalIngredient)
	const isModal = isOrder || isIngredient;

	useEffect(() => {
		dispatch(loadIngredients())
	}, [dispatch])


	return (
		<div className={style.App}>
			<header className={style.App}>
				<AppHeader/>
			</header>
			{isLoading && 'Загрузка...'}
			{hasError && 'Произошла ошибка'}
			{!isLoading &&
				!hasError &&
				<main>
					<div className={`${style.ingredientSection} mr-10`}>
						<BurgerIgredients/>
					</div>
					<div className={style.constructorSection}>
						<BurgerConstructor/>
					</div>
				</main>
			}
			{isModal &&
				(<Modal>
					{isOrder && <OrderDetails/>}
					{isIngredient && <IngredientDetails/>}
				</Modal>)
			}
		</div>
	);
}

export default App;
