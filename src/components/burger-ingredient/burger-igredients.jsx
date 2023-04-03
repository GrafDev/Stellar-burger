import React, {useEffect, useRef, useState} from "react";
import styles from "./burger-ingredients.module.css"
import {textLarge, textMedium} from "../../utils/themes";
import BurgerTab from "./burger-tub/burger-tab";
import IngredientCarts from "./ingredient-carts/ingredient-carts";
import {useSelector} from "react-redux";
import {getIngredients} from "../../services/selectors/ingredients-selector";
import {useRect} from "../../hoc/userect";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";



function BurgerIgredients() {
	const data= useSelector(getIngredients)
	const [currentType,setCurrentType]=useState('bun')
	const bunRef=useRef();
	const mainRef=useRef();
	const sauceRef=useRef();
	const tabRef = useRef();



	let burgers = data;
	const changeTab=(e)=>{
		setCurrentType(e)
		switch (e){
			case ('main'):
				mainRef.current.scrollIntoView({block: "start", behavior: "smooth"});
				break;
			case ('sauce'):
				sauceRef.current.scrollIntoView({block: "start", behavior: "smooth"});
				break;
			default:
				bunRef.current.scrollIntoView({block: "start", behavior: "smooth"});

		}
	}


	const handlerScroll=()=> {
		let _currentType;
		let bottomTab=tabRef.current.getBoundingClientRect().bottom
		let dimBun=Math.abs(bottomTab-bunRef.current.getBoundingClientRect().top)
		let dimMain=Math.abs(bottomTab-mainRef.current.getBoundingClientRect().top)
		let dimSauce=Math.abs(bottomTab-sauceRef.current.getBoundingClientRect().top)
		if (dimBun<dimSauce) _currentType='bun'
		else if (dimSauce<dimMain) _currentType='sauce'
		else _currentType='main'
		 setCurrentType(_currentType)
	}


	return (
		<div className={styles.section} >
			<div className={`${styles.title} ${textLarge}`}>Соберите бургер</div>
			<div ref={tabRef}  className={styles.tab} style={{ display: 'flex' }}>
					<Tab value="bun" active={currentType === 'bun'} onClick={changeTab} >
						Булки
					</Tab>
					<Tab value="sauce" active={currentType === 'sauce'} onClick={changeTab}>
						Соусы
					</Tab>
					<Tab value="main" active={currentType === 'main'} onClick={changeTab} >
						Начинки
					</Tab>
			</div>


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