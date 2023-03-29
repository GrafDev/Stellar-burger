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
import { useSelector} from "react-redux";
import {getIsModalOrder} from "../../services/selectors/order-selector";
import { getIsModalIngredient} from "../../services/selectors/current-ingredient-selector";



function App() {
	const [state, setState] = useState({
		isLoading: true,
		hasError: false,
		data: []
	})
	// const dispatch=useDispatch();
	const isOrder=useSelector(getIsModalOrder)

	const isIngredient=useSelector( getIsModalIngredient)

	const isModal=isOrder || isIngredient;

	const [total,setTotal]=useState(13441);
	// const dispatch=useDispatch();


	useEffect(() => {
		readData(state, setState)
	}, [])


	const {data, isLoading, hasError} = state;

	//dispatch(loadConstructorIngredients([]))
	const order=data;
	//  const order = useSelector(getConstructorIngredients)
	//setTotal(useMemo(() => order.reduce((sum, elem) => sum + elem.price, 0), [order]));


	const value = {

		total
	}

	console.log(isModal,isIngredient,isOrder)


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
