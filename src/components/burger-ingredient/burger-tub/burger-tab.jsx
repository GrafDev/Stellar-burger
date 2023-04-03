import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {typeCart} from "../../../utils/types";
import IngredientCarts from "../ingredient-carts/ingredient-carts";


function BurgerTab(props){
    const current=props.current

    return (
        <div style={{ display: 'flex' }}>
            <Tab value="bun" active={current === 'bun'} >
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} >
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} >
                Начинки
            </Tab>
        </div>
    )
}

BurgerTab.propTypes={
    current:PropTypes.string.isRequired,
}
export  default BurgerTab;