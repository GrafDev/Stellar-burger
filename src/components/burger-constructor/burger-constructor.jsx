import React, {useState} from "react";
import styles from "./burger-constructor.module.css"
import {textLarge} from "../../utils/themes";
import BurgerTab from "./burger-tub/burger-tab";
import IngredientCarts from "./ingredient-carts/ingredient-carts";
import PropTypes from "prop-types";
import {typeCart} from "../../utils/types";
import ModalOverlay from "../modal/modal-overlay/modal-overlay";
import Modal from "../modal/modal";


function BurgerConstructor(props) {
	const {data}=props;
	const {currentType,setCurrentType}=useState('bun');


	let burgers = data;
	return (
		<div className={styles.section}>
			<div className={`${styles.title} ${textLarge}`}>Соберите бургер</div>
			<div className={styles.tab}><BurgerTab current={currentType}/></div>
			<div className={styles.ingredients}>
				<IngredientCarts data={data} type={'bun'} bill={burgers} >Булки</IngredientCarts>
				<IngredientCarts data={data} type={'main'} bill={burgers} >Соусы</IngredientCarts>
				<IngredientCarts data={data} type={'sauce'} bill={burgers} >Начинка</IngredientCarts>
			</div>
		</div>
	)

}

BurgerConstructor.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape(typeCart)).isRequired,
}

export default BurgerConstructor;