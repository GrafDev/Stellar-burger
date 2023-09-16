import React, {FC, memo, useEffect} from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";

import {useDispatch} from "react-redux";

import {getIngredients} from "../../redux/features/ingredients/ingredientsSlice";

import Routers from "../../router/routers";
import {getUser} from "../../redux/features/auth/authSlice";


const App:FC=()=> {


    const dispatch = useDispatch();



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

export default memo(App);
