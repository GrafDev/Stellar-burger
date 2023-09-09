import React from 'react'
import classNames from 'classnames'
import styles from './ingredients-page.module.css'
import
    IngredientInfo from "../../components/ingredient-details/ingredient-info/ingredient-info";

const IngredientPage= () => {

    console.log('IngredientPage')
    return (
        <div className={classNames('container', styles.wrapper)}>
            <IngredientInfo />
        </div>
    )
}


export default React.memo(IngredientPage)
