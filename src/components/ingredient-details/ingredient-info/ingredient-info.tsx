import React, {FC} from "react";
import style from './ingredient-info.module.css'
import {
    digitsInactiveDefault,
    inactiveDefault,
    textLarge,
    textMedium
} from "../../../utils/constants/text-style-constants";
import {useParams} from "react-router-dom";
import useIngredientDetails from "../../../hooks/use-Ingredient-details";

const IngredientInfo: FC = () => {

    const {id} = useParams()
    const data = useIngredientDetails(id)
    const Ingredient = (text:string, part:number) => {
        return (
            <div className={style.ingredient}>
                <div className={inactiveDefault} style={{marginBottom: '8px'}}>{text}</div>
                <div className={digitsInactiveDefault} style={{textAlign: 'center'}}>{part}</div>
            </div>
        )
    }

    return (

        <>
            {!data ? (<div>Загрузка...</div>) : (
                <div>
                    <div className={style.title}>
                        <span className={`${textLarge} ${style.text}`}>Детали ингредиента</span>
                    </div>
                    <div className={style.modal}>
                        <img className={style.image} style={{paddingBottom: '16px'}} src={data.image}
                             alt={'attribute'}/>
                        <span className={textMedium} style={{paddingBottom: '32px'}}>{data.name}</span>
                        <div className={style.ingredients}>
                            {Ingredient('Калории,ккал', data.calories)}
                            {Ingredient('Белкиб г', data.proteins)}
                            {Ingredient('Жиры, г', data.fat)}
                            {Ingredient('Углеводы, г', data.carbohydrates)}
                        </div>
                    </div>


                </div>
            )}

        </>


    )
}

export default IngredientInfo;