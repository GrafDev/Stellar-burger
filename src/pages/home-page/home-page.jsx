import Spinner from "../../components/spinner/spinner";
import classNames from "classnames";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {textLarge} from "../../utils/constants/text-style-constants";
import BurgerIngredients from "../../components/burger-ingredient/burger-igredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import React from "react";
import {useSelector} from "react-redux";
import {getHasError, getIsLoading} from "../../redux/features/ingredients/ingredients-selectors";
import styles from './home-page.module.css'

const HomePage=()=>{
    const isLoading = useSelector(getIsLoading)
    const hasError = useSelector(getHasError)
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
export default HomePage;