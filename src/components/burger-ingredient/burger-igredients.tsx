import React, {FC, useMemo, useRef, useState} from "react";
import styles from "./burger-ingredients.module.css"
import { textMedium} from "../../utils/constants/text-style-constants";
import IngredientCarts from "./ingredient-carts/ingredient-carts";
import {useSelector} from "react-redux";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import {BUN, MAIN, SAUCE} from "../../utils/constants/ingredient-constants";
import {getIngredientsSelector} from "../../redux/features/ingredients/selectors-ingredients";
import {TTypeIngredient,ICart} from "../../utils/data-Types"

const BurgerIngredients:FC =() =>{
    const data = useSelector(getIngredientsSelector)
    const [currentType, setCurrentType] = useState<TTypeIngredient>(BUN)
    const bunRef:any = useRef<HTMLInputElement>();   //  TODO: разобраться с  any
    const mainRef:any = useRef<HTMLInputElement>();
    const sauceRef:any = useRef<HTMLInputElement>();
    const tabRef:any = useRef<HTMLInputElement>();
    const borderRef:any= useRef<HTMLInputElement>();

    const callback = (entries: any[], observer: { unobserve: (arg0: any) => void; }) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.5) {
                observer.unobserve(entry.target)
            }
        })
    }
    const options = {
        root: borderRef.current,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0,
    }
    const observer = new IntersectionObserver(callback, options)



    const changeTab = (e:any) => {
        setCurrentType(e)
        switch (e) {
            case (MAIN):
                mainRef.current.scrollIntoView({block: "start", behavior: "smooth"});
                break;
            case (SAUCE):
                sauceRef.current.scrollIntoView({block: "start", behavior: "smooth"});
                break;
            default:
                bunRef.current.scrollIntoView({block: "start", behavior: "smooth"});

        }
    }
    const handlerScroll = () => {
        let _currentType:TTypeIngredient;
        let bottomTab:number = tabRef.current.getBoundingClientRect().bottom
        let dimBun:number = Math.abs(bunRef.current.getBoundingClientRect().top - bottomTab)
        let dimMain:number = Math.abs(mainRef.current.getBoundingClientRect().top - bottomTab)
        let dimSauce:number = Math.abs(sauceRef.current.getBoundingClientRect().top - bottomTab)
        if (dimBun < dimSauce) _currentType = BUN
        else if (dimSauce < dimMain) _currentType = SAUCE
        else _currentType = MAIN
        setCurrentType(_currentType)
        observer.observe(bunRef.current)
    }

    const bunIngredient=useMemo(()=>data.filter((elem:ICart):boolean => elem.type === BUN),[data])
    const sauceIngredient=useMemo(()=>data.filter((elem:ICart):boolean => elem.type === SAUCE),[data])
    const mainIngredient=useMemo(()=>data.filter((elem:ICart):boolean => elem.type === MAIN),[data])


    return (
        <div className={styles.ingredientsWrapper}>
            <div ref={tabRef} className={styles.tab} style={{display: 'flex'}}>
                <Tab value={BUN} active={currentType === BUN} onClick={changeTab}>Булки</Tab>
                <Tab value={SAUCE} active={currentType === SAUCE} onClick={changeTab}>Соусы</Tab>
                <Tab value={MAIN} active={currentType === MAIN} onClick={changeTab}>Начинки</Tab>
            </div>
            <div className={styles.ingredientBox}>
                <div ref={borderRef} className={styles.ingredients} onScroll={handlerScroll}>
                    <div ref={bunRef} className={classNames(
                        textMedium, 'mb-10',
                        styles.titleItems
                    )}>Булки
                    </div>
                    <div className={styles.items}>

                        <IngredientCarts data={bunIngredient}/>
                    </div>
                    <div ref={sauceRef} className={classNames(
                        textMedium, 'mb-10',
                        styles.titleItems
                    )}>Соусы
                    </div>
                    <div className={styles.items}>
                        <IngredientCarts data={sauceIngredient}/>
                    </div>
                    <div ref={mainRef} className={classNames(
                        textMedium, 'mb-10',
                        styles.titleItems
                    )}>Начинка
                    </div>
                    <div className={styles.items}>
                        <IngredientCarts data={mainIngredient}/>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default BurgerIngredients;