import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import style from "./App.module.css";
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import readData from "../../utils/read-data";
import contexts from "../../utils/contexts";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {getIsModalOrder} from "../../services/selectors/order-selector";
import {getIsModalIngredient} from "../../services/selectors/current-ingredient-selector";
import {loadIngredients} from "../../services/action/ingredients-action";


function App() {
	// const [state, setState] = useState({
	// 	isLoading: true,
	// 	hasError: false,
	// 	data: []
	// })

	const dispatch = useDispatch();
	const isOrder = useSelector(getIsModalOrder)
	const {isLoading, hasError} = useSelector(store => store.ingredients)
	const isIngredient = useSelector(getIsModalIngredient)
	const isModal = isOrder || isIngredient;
	const [total, setTotal] = useState(13441);

	useEffect(() => {
		dispatch(loadIngredients())
		// readData(state, setState)
	}, [dispatch])
	const tempData = useSelector(store => store.ingredients.ingredients)

	console.log(tempData)
	const {data} = tempData;
	const order = data;



	const value = {

		total
	}

	console.log(isModal, isIngredient, isOrder)


	return (
		<contexts.Provider value={value}>
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
							<BurgerConstructor data={data}/>
						</div>
						<div className={style.constructorSection}>
							<BurgerIngredients order={order}/>
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
		</contexts.Provider>
	);
}

export default App;
