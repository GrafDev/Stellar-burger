import {digitsDefault} from "../../../../utils/constants/text-style-constants";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC, useMemo} from "react";
import {ICart} from "../../../../utils/data-Types";
import styles from "./cart.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useDrag} from "react-dnd";
import classNames from "classnames";
import {setToolCurrentIngredient} from "../../../../redux/features/currentIngredient/currentIngredientSlice";
import {getConstructorIngredients} from "../../../../redux/features/constructor/constructor-selectors";
import {BUN} from "../../../../utils/constants/ingredient-constants";
import {Link, useLocation} from "react-router-dom";
import {INGREDIENT_LINK} from "../../../../utils/constants/router-link-constants";

type TProps = {
    cart: ICart
}

const Cart: FC<TProps> = (props: TProps) => {
    const cart: ICart = props.cart
    const dispatch = useDispatch();
    const location = useLocation()

    const handleClick = () => {
        console.log('setToolCurrentIngredient(cart)')
        dispatch(setToolCurrentIngredient(cart))
    }

    const {pieces, bun} = useSelector(getConstructorIngredients)

    const count = useMemo(() => {
        if (cart.type === BUN) {
            return bun?._id === cart._id ? 2 : 0
        } else {
            if (!cart) return 0
            return pieces?.filter((item: ICart) => item._id === cart._id).length
        }
    }, [pieces, bun, cart])


    const id:string = cart._id;


    const [{isDragging}, dragRef] = useDrag({
        type: 'cart',
        item: {id},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),

    });


    return (
        <div ref={dragRef} className={classNames(
            styles.cart,
            isDragging && styles.onDrag,
        )} onClick={handleClick}>
            <Link
                to={`${INGREDIENT_LINK}/${cart._id}`}
                state={{background: location}}
            >
                <div className={styles.image}><img src={cart.image} alt={cart.name}/></div>
                <div className={styles.cost}>
                    <div className={`${digitsDefault}`}>
                        {cart.price}
                    </div>
                    <div className={styles.icons}>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>
                <div className={classNames(
                    styles.name,
                    isDragging && styles.onDragText,
                )}>
                    {cart.name}
                </div>
            </Link>
            {count > 0 &&
                <Counter count={count} size="default"/>}
        </div>

    );
}


export default Cart;