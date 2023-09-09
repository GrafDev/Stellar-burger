import React, {useEffect} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";

import {useDispatch, useSelector} from "react-redux";

import {getIngredients} from "../../redux/features/ingredients/ingredientsSlice";

import {getIsModalOrder} from "../../redux/features/order/order-selectors";
import {getIsModalIngredient} from "../../redux/features/currentIngredient/current-ingredient-selectors";
import Routers from "../../router/routers";
import {getUser} from "../../redux/features/auth/authSlice";


function App() {

    const dispatch = useDispatch();
    // const isOrder = useSelector(getIsModalOrder)
    // const isIngredient = useSelector(getIsModalIngredient)
    // const isModal = isOrder || isIngredient;

    useEffect(() => {

        dispatch(getIngredients())
        dispatch(getUser());
    }, [dispatch])


    return (
        <div id={'popup-hint'} className={styles.App}>
            <AppHeader/>
            <Routers/>
        </div>
    );
}

export default App;
