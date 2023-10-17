import {FC} from "react";
import {useDrop} from "react-dnd";
import {v4 as uuidv4} from 'uuid';
import style from './burger-constructor.module.css';
import {ADD_INGREDIENT, ADD_BUN} from '../../../types/constants-types/orders-types';
import {ingredient} from '../../../types/ingredients-types';
import PurchaseAmount from '../../purchase-amount/purchase-amount';
import CardBuns from './burger-constructor-card/card-buns/card-buns';
import CardOther from './burger-constructor-card/card-other/card-other';
import {useSelector, useDispatch} from '../../../hooks/store-hooks';
import {ITypeIngredient} from "../../../types/ingredients-types";
import {activeDefault, colorInactive, textLarge, textMedium} from "../../../utils/constants/text-style-constants";

const BurgerConstructor: FC = () => {
    const dispatch = useDispatch();
    const {BUN} = ingredient
    const {list, bun} = useSelector(store => store.order)

    const moveIngredient = (ingredient: ITypeIngredient) => {
        dispatch({
            type: ingredient.type === BUN ? ADD_BUN : ADD_INGREDIENT,
            item: {...ingredient, uniqueId: uuidv4()}
        })
    }

    const [{isHover}, dropTarget] = useDrop({
        accept: 'ingredients',
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(item: any) {
            moveIngredient(item);
        }
    })

    return (


        <section className={`${style.constuctionSection}  mt-25 `} ref={dropTarget}>

                {(list.length || bun) ?

                <section className={`${style.ingredientSection}  ${isHover ? style.dropZone_isHovering : ''} `} ref={dropTarget}>
                    {bun ? <CardBuns position={'top'} buns={bun}/> :
                        <p className={` ${textMedium} ${colorInactive} pb-15`}>
                            Нехватает</p>}

                    <ul className={`${style.sectionList}  mt-3 pr-3`}>
                        {list.length ? list.map((item, i) => {
                                return <CardOther ingredient={item} key={item.uniqueId} index={i}/>
                            })
                            :
                            <p className={`${style.cartOther} ${textMedium} ${colorInactive}  pl-30 pr-15`}> Выберите
                                ничинку или соус и добавьте их сюда</p>}
                    </ul>
                    {bun ? <CardBuns position={'bottom'} buns={bun}/> :
                        <p className={`${textMedium} ${colorInactive}`}>
                            булочек</p>}


                </section>

                    :
                    <div className={`${style.dropZone}  ${isHover ? style.dropZone_isHovering : ''} 
                ${textMedium} ${colorInactive}`}>

                    <p className={style.dropText}> Возьмите соусик и начиночку или может  булочку, затем положите сюда</p>
                    </div>
                }
                <div className={style.purchaseAmount}>
                    {((list.length > 0 && bun) ? (<PurchaseAmount ingredients={list} buns={bun}/>) : null)}
                </div>

        </section>
    )
};

export default BurgerConstructor