import React from 'react'
import classNames from 'classnames'
import styles from './ingredient-page.module.css'
import IngredientInfo from "../../components/ingredient-details/ingredient-info/ingredient-info";

const IngredientPage= () => {
    return (
        <div className={classNames('container', styles.wrapper)}>
            <h2>Детали ингредиента</h2>
            <IngredientInfo />
        </div>
    )
}

export default React.memo(IngredientPage)
