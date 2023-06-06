import React, {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./App.module.css";

import {useDispatch, useSelector} from "react-redux";

import {getIngredients} from "../../redux/features/ingredients/ingredientsSlice";

import {getIsModalOrder} from "../../redux/features/order/order-selectors";
import {getIsModalIngredient} from "../../redux/features/currentIngredient/current-ingredient-selectors";
import Routers from "../../router/routers";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";



function App() {

    const dispatch = useDispatch();
    const isOrder = useSelector(getIsModalOrder)
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
            <Routers/>
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
