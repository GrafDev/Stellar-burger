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
	const [currentType,setCurrentType]=useState('bun')
	const bunRef=useRef();
	const mainRef=useRef();
	const sauceRef=useRef();
	const tabRef = useRef();



	let burgers = data;
	// const changeTab=(type)=>{
	// 	setCurrentType(type)
	// }


	const handlerScroll=()=> {
		let _currentType;
		let bottomTab=tabRef.current.getBoundingClientRect().bottom
		let dimBun=Math.abs(bottomTab-bunRef.current.getBoundingClientRect().top)
		let dimMain=Math.abs(bottomTab-mainRef.current.getBoundingClientRect().top)
		let dimSauce=Math.abs(bottomTab-sauceRef.current.getBoundingClientRect().top)
		if (dimBun<dimSauce) _currentType='bun'
		else if (dimSauce<dimMain) _currentType='sauce'
		else _currentType='main'
		console.log(dimBun,dimMain,dimSauce)
		 setCurrentType(_currentType)

		// if(dimBun<0 && )
		// if (bunRef.current.getBoundingClientRect().top-shareRef.current.getBoundingClientRect().bottom<32){
		// 	console.log('bun')
		// };
		// if (mainRef.current.getBoundingClientRect().top-shareRef.current.getBoundingClientRect().bottom<32){
		// 	console.log('main')
		// };
		// if (sauceRef.current.getBoundingClientRect().top-shareRef.current.getBoundingClientRect().bottom<32){
		// 	console.log('sauce')
		// };
	}


	return (
		<div className={styles.section} >
			<div className={`${styles.title} ${textLarge}`}>Соберите бургер</div>
			<div ref={tabRef}  className={styles.tab}><BurgerTab current={currentType} /></div>
			<div className={styles.ingredients} onScroll={handlerScroll}>
				<div ref={bunRef} className={`${textMedium} mb-10`}>Булки</div>
				<IngredientCarts data={data} type={'bun'} bill={burgers} />
				<div ref={sauceRef} className={`${textMedium} mb-10`}>Соусы</div>
				<IngredientCarts data={data} type={'sauce'} bill={burgers} />
				<div ref={mainRef} className={`${textMedium} mb-10`}>Начинка</div>
				<IngredientCarts data={data} type={'main'} bill={burgers} />
			</div>
		</div>
	)
}

export default BurgerIgredients;