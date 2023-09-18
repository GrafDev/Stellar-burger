import styles from "./burger-constructor.module.css"
import ConstructorFooter from "./constructor-footer/constructor-footer";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import classNames from "classnames";
import {increaseConstructor} from "../../redux/features/constructor/constructorSlice";
import {getConstructorIngredients} from "../../redux/features/constructor/constructor-selectors";
import Bun from "./pieces-components/component-bun";
import Pieces from "./pieces-components/component-pieces";
import {BOTTOM, TOP} from "../../utils/constants/ingredient-constants";
import {getIngredientsSelector} from "../../redux/features/ingredients/selectors-ingredients";
import {FC} from "react";

const BurgerConstructor:FC = () => {
    const dispatch = useDispatch();
    const store = useSelector(getIngredientsSelector)
    const order:any = useSelector(getConstructorIngredients)// TODO: разобраться с any
    const isEmptyPieces:boolean = !order;

    const [{isHover}, dropTarget] = useDrop({
        accept: 'cart',
        drop(itemId:any) {
            const elem= store.find((item: { _id: any; }) => item._id === itemId.id) // TODO: разобраться с any
            return (dispatch(increaseConstructor(elem)))
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })

    })

    const borderColor = isHover ? 'rgba(51, 51, 255, 0.25)' : 'transparent'

    return (


        <div className={styles.constr}>
            <div ref={dropTarget} className={classNames(
                styles.target,
                isHover && styles.targetIsHover,)} style={{borderColor}}>
                <div className={classNames(
                    styles.list,
                    isEmptyPieces && styles.emptyList
                )}>
                    <Bun bun={order.bun} type={TOP}/>
                    <Pieces pieces={order.pieces}/>
                    <Bun bun={order.bun} type={BOTTOM}/>
                </div>
            </div>
            <ConstructorFooter/>

        </div>
    )
}

export default BurgerConstructor;