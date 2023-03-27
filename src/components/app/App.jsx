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


function App() {
	const [state, setState] = useState({
		isLoading: true,
		hasError: false,
		data: []
	})
	// const dispatch=useDispatch();
	const isOrder=useSelector(store=>store.order.isModalOrder)

	const isIngredient=useSelector(store=>store.currentIngredient.isModalIngredient)

	const isModal=isOrder || isIngredient;

	// const [isModalOpen, setIsModalOpen] = useState(false);
	//const [isOrder, setIsOrder] = useState(false);
	// const [isIngredient, setIsIngredient] = useState(false);
	const [total,setTotal]=useState(74441);


	// const openModal = (checkModal, data) => {
	// 	if (checkModal === 'Order') {
	// 		dispatch({type:SET_MODAL_ORDER})
	// 		 // setIsOrder(true);
	// 	} else if (checkModal === 'Ingredients') {
	// 		setIsIngredient(true);
	// 		setCurrentIngredient(data);
	// 	}
		// setIsModalOpen(true);
	// }

	// const closeModal = () => {
	// 	// dispatch({type:DESET_MODAL_ORDER})
	// 	// setIsOrder(false)
	// 	setIsIngredient(false)
	// 	// setIsModalOpen(false)
	// }

	useEffect(() => {
		readData(state, setState)
	}, [])


	const {data, isLoading, hasError} = state;
	const order = data;
	//setTotal(useMemo(() => order.reduce((sum, elem) => sum + elem.price, 0), [order]));


	const value = {
		// openModal,
		// closeModal,
		// currentIngredient,
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
