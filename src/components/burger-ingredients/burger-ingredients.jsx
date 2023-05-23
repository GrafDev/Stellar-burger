import React from "react";
import styles from "./burger-ingredients.module.css"
import IngredientParts from "./ingredient-part/ingredient-parts.jsx";
import TotalCost from "./total-cost/total-cost";
import PropTypes from "prop-types";
import {typeCart} from "../../utils/types";



function BurgerIngredients(props){
    const pieces=props.order.filter(elem=>elem.type!=='bun')
    const bun=props.order.find(elem=>elem.type==='bun')
    return(
    <div className={styles.section}>
        <div className={styles.ingredients}>
            <div className={styles.bun}>
                <IngredientParts type={'top'} piece={bun}  key={bun.id}></IngredientParts>
            </div>
            <div className={styles.pieces}>
                {pieces.map(elem=>
                    <IngredientParts type={''} piece={elem} key={elem._id}></IngredientParts>
                )}
            </div>
            <div className={styles.bun}>
            <IngredientParts type={'bottom'} piece={bun} key={bun.id}></IngredientParts>
            </div>
        </div>
    <TotalCost/>

    </div>
)
}

BurgerIngredients.propTypes={
    pieces:PropTypes.arrayOf(PropTypes.shape(typeCart).isRequired)
}
export default BurgerIngredients;