import Spinner from "../../components/spinner/spinner";
import classNames from "classnames";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {textLarge} from "../../utils/constants/text-style-constants";
import BurgerIngredients from "../../components/burger-ingredient/burger-igredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import React from "react";
import {useSelector} from "react-redux";
import styles from './home-page.module.css'
import {
    getIngredientsIsLoadingSelector, getIngredientsHasErrorSelector
} from "../../redux/features/ingredients/selectors-ingredients";
import PropTypes from "prop-types";

const HomePage=()=>{
    const isLoading = useSelector(getIngredientsIsLoadingSelector)
    const hasError = useSelector(getIngredientsHasErrorSelector)
    return(
        <>
            {isLoading && <Spinner/>}
            {hasError && 'Произошла ошибка'}
            {!isLoading &&
                !hasError &&
                <main className={classNames('container', styles.main)}>
                    <DndProvider backend={HTML5Backend}>
                        <div className={`${styles.title} ${textLarge}`}>Соберите бургер</div>
                        <BurgerIngredients/>
                        <BurgerConstructor/>
                    </DndProvider>
                </main>

            }
        </>
    )
}

HomePage.propTypes = {
	orderId: PropTypes.string.isRequired,
};

export default HomePage;