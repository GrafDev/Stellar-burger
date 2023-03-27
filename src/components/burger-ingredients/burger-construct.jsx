import React from "react";
import styles from "./burger-ingredients.module.css"
import ConstructorParts from "./ingredient-part/constructor-parts.jsx";
import TotalCost from "./total-cost/total-cost";
import PropTypes from "prop-types";
import {typeCart} from "../../utils/types";



function BurgerConstruct(props){
    const pieces=props.order.filter(elem=>elem.type!=='bun')
    const bun=props.order.find(elem=>elem.type==='bun')
    return(
    <div className={styles.section}>
        <div className={styles.ingredients}>
            <div className={styles.bun}>
                <ConstructorParts type={'top'} piece={bun} key={bun.id}></ConstructorParts>
            </div>
            <div className={styles.pieces}>
                {pieces.map(elem=>
                    <ConstructorParts type={''} piece={elem} key={elem._id}></ConstructorParts>
                )}
            </div>
            <div className={styles.bun}>
            <ConstructorParts type={'bottom'} piece={bun} key={bun.id}></ConstructorParts>
            </div>
        </div>
    <TotalCost/>

    </div>
)
}

BurgerConstruct.propTypes={
    pieces:PropTypes.arrayOf(PropTypes.shape(typeCart).isRequired)
}
export default BurgerConstruct;