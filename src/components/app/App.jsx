import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import style from "./App.module.css";

import BurgerIngredients from '../burger-constructor/burger-constructor';
import BurgerConstructor from '../burger-ingredients/burger-construct';
import readData from "../../utils/read-data";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";


function App() {
	const isOrder=useSelector(store=>store.order.isModalOrder)
	const isIngredient=useSelector(store=>store.currentIngredient.isModalIngredient)
	const isModal=isOrder || isIngredient;

	useEffect(() => {

		readData()

	}, [])

const state=useSelector(store=>store.ingredients)
	const {data, isLoading, hasError} = state;


	return (
			<div className={style.App}>
				<header className={style.App}>
					<AppHeader/>
				</header>
				{isLoading && 'Загрузка...'}
				{hasError && 'Произошла ошибка'}
				{!isLoading &&
					!hasError &&
					data.length &&
					<main>
						<div className={`${style.ingredientSection} mr-10`}>
							<BurgerIngredients data={data}/>
						</div>
						{/*<div className={style.constructorSection}>*/}
						{/*	<BurgerConstructor order={order}/>*/}
						{/*</div>*/}
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
