import React, {FC} from "react";
import {ICart} from "../../../utils/types";
import Cart from "./cart/cart";
import styles from "./ingredient-carts.module.css"
import {motion} from "framer-motion";


type TProps = {
    data: Array<ICart>
}

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            // Управляет задержкой срабатывания анимации у дочерних элементов
            staggerChildren: 0.3
        }
    }
};

const listItem = {
    hidden: {opacity: 0},
    show: {opacity: 1}
};

const IngredientCarts: FC<TProps> = (props: TProps) => {
    const carts = props.data
    return (
        <motion.ul variants={container} initial="hidden" animate="show" className={styles.carts}>

            {carts.map((cart:ICart) => (
                <motion.li key={cart._id} variants={listItem}>
            <Cart cart={cart}/>
        </motion.li>
    )
)
}
</motion.ul>
)
}


export default IngredientCarts;