import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import style from "./App.module.css";
import BurgerIgredients from '../burger-ingredient/burger-igredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import readData from "../../utils/read-data";
import contexts from "../../utils/contexts";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {getIsModalOrder} from "../../services/selectors/order-selector";
import {getIsModalIngredient} from "../../services/selectors/current-ingredient-selector";
import {loadIngredients} from "../../services/action/ingredients-action";
import {loadConstructorIngredients} from "../../services/action/constructor-ingredients-action";
import {getIngredients} from "../../services/selectors/ingredients-selector";


function App() {

	const dispatch = useDispatch();
	const isOrder = useSelector(getIsModalOrder)
	const {isLoading, hasError} = useSelector(store => store.ingredients)
	const isIngredient = useSelector(getIsModalIngredient)
	const isModal = isOrder || isIngredient;
	const [total, setTotal] = useState(13441);

	useEffect(() => {
		dispatch(loadIngredients())
	}, [dispatch])

	const data= useSelector(getIngredients)
	const order = data;

	const value = {

		total
	}



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
							<BurgerIgredients/>
						</div>
						<div className={style.constructorSection}>
							<BurgerConstructor order={order}/>
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
