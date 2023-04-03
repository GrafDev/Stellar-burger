import React, {useEffect, useRef, useState} from "react";
import styles from "./burger-ingredients.module.css"
import {textLarge, textMedium} from "../../utils/themes";
import BurgerTab from "./burger-tub/burger-tab";
import IngredientCarts from "./ingredient-carts/ingredient-carts";
import {useSelector} from "react-redux";
import {getIngredients} from "../../services/selectors/ingredients-selector";
import {useRect} from "../../hoc/userect";



function BurgerIgredients() {
	const data= useSelector(getIngredients)
	const {currentType,setCurrentType}=useState('bun');
	const bunRef=useRef();
	const mainRef=useRef();
	const sauceRef=useRef();
	const tabRef = useRef();



	useEffect(() => {

		console.log(bunRef,bunRef.current)
		console.log(mainRef,mainRef.current)
		console.log(sauceRef,sauceRef.current)
		console.log(tabRef,tabRef.current)
	}, []);


	let burgers = data;

	function handlerScroll(e) {
		tabRef.current.getBoundingClientRect()
	}

console.log(tabRef.current)

	return (
		<div className={styles.section} >
			<div className={`${styles.title} ${textLarge}`}>Соберите бургер</div>
			<div ref={tabRef} className={styles.tab}><BurgerTab current={currentType}/></div>
			<div className={styles.ingredients} onScroll={handlerScroll}>
				<div ref={bunRef} className={`${textMedium} mb-10`}>Булки</div>
				<IngredientCarts data={data} type={'bun'} bill={burgers} />
				<div ref={mainRef} className={`${textMedium} mb-10`}>Начинка</div>
				<IngredientCarts data={data} type={'main'} bill={burgers} />
				<div ref={sauceRef} className={`${textMedium} mb-10`}>Соусы</div>
				<IngredientCarts data={data} type={'sauce'} bill={burgers} />
			</div>
		</div>
	)
}

export default BurgerIgredients;