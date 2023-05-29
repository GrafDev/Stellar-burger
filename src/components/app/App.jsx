import React, {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./App.module.css";
import BurgerIngredients from '../burger-ingredient/burger-igredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import classNames from "classnames";
import {textLarge} from "../../utils/themes";
import {getIngredients} from "../../redux/features/ingredients/ingredientsSlice";
import Spinner from "../spinner/spinner";
import {getHasError, getIsLoading} from "../../redux/features/ingredients/ingredients-selectors";
import {getIsModalOrder} from "../../redux/features/order/order-selectors";
import {getIsModalIngredient} from "../../redux/features/currentIngredient/current-ingredient-selectors";
import HomePage from "../../pages/home-page/home-page";
import {Router} from "react-router-dom";
import AllRouter from "../../router/router";


function App() {

    const dispatch = useDispatch();
    const isOrder = useSelector(getIsModalOrder)
    const isLoading = useSelector(getIsLoading)
    const hasError = useSelector(getHasError)

    const isIngredient = useSelector(getIsModalIngredient)
    const isModal = isOrder || isIngredient;

    useEffect(() => {
        {
            dispatch(getIngredients())
        }
    }, [dispatch])


    return (
        <div className={styles.App}>
            <AppHeader/>
            {/*<AllRouter/>*/}
            <HomePage/>

            {isModal &&
                (<Modal>
                    <>
                        {isOrder && <OrderDetails/>}
                        {isIngredient && <IngredientDetails/>}
                    </>
                </Modal>)
            }
        </div>
    );
}

export default App;
