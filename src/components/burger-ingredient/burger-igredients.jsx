import React, {useEffect, useRef, useState} from "react";
import styles from "./burger-ingredients.module.css"
import {textLarge, textMedium} from "../../utils/themes";
import IngredientCarts from "./ingredient-carts/ingredient-carts";
import {useSelector} from "react-redux";
import {getIngredients} from "../../services/selectors/ingredients-selector";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";


function BurgerIngredients() {
	const data = useSelector(state => state.tollIngredients.ingredients)
	const [currentType, setCurrentType] = useState('bun')
	const bunRef = useRef();
	const mainRef = useRef();
	const sauceRef = useRef();
	const tabRef = useRef();
	const borderRef = useRef();

	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0.5) {
				console.log('Элемент пересёк границу области и всё ещё соприкасается с ней!')
				console.log(entry.target)
				observer.unobserve(entry.target)
			}
		})
	}

	const options = {
		root: borderRef.current,
		rootMargin: '0px 0px 0px 0px',
		threshold: 0,
	}

	const observer = new IntersectionObserver(callback, options)

	let burgers = data;

	const changeTab = (e) => {
		setCurrentType(e)
		switch (e) {
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


	const handlerScroll = () => {
		let _currentType;
		let bottomTab = tabRef.current.getBoundingClientRect().bottom
		let dimBun = Math.abs(bunRef.current.getBoundingClientRect().top - bottomTab)
		let dimMain = Math.abs(mainRef.current.getBoundingClientRect().top - bottomTab)
		let dimSauce = Math.abs(sauceRef.current.getBoundingClientRect().top - bottomTab)
		if (dimBun < dimSauce) _currentType = 'bun'
		else if (dimSauce < dimMain) _currentType = 'sauce'
		else _currentType = 'main'
		setCurrentType(_currentType)
		observer.observe(bunRef.current)
	}


	return (
		<div className={styles.ingredientsWrapper}>
			<div ref={tabRef} className={styles.tab} style={{display: 'flex'}}>
				<Tab value="bun" active={currentType === 'bun'} onClick={changeTab}>Булки</Tab>
				<Tab value="sauce" active={currentType === 'sauce'} onClick={changeTab}>Соусы</Tab>
				<Tab value="main" active={currentType === 'main'} onClick={changeTab}>Начинки</Tab>
			</div>
			<div className={styles.ingredientBox}>
				<div ref={borderRef} className={styles.ingredients} onScroll={handlerScroll}>

					<div ref={bunRef} className={classNames(
						textMedium, 'mb-10',
						styles.titleItems
					)}>Булки
					</div>
					<div className={styles.items}>
						<IngredientCarts data={data} type={'bun'} bill={burgers}/>
					</div>
					<div ref={sauceRef} className={classNames(
						textMedium, 'mb-10',
						styles.titleItems
					)}>Соусы
					</div>
					<div className={styles.items}>
						<IngredientCarts data={data} type={'sauce'} bill={burgers}/>
					</div>
					<div ref={mainRef} className={classNames(
						textMedium, 'mb-10',
						styles.titleItems
					)}>Начинка
					</div>
					<div className={styles.items}>
						<IngredientCarts data={data} type={'main'} bill={burgers}/>
					</div>
				</div>
			</div>

		</div>
	)
}

export default BurgerIngredients;