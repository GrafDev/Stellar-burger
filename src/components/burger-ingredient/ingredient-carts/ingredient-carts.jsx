import React from "react";
import PropTypes from "prop-types";
import {typeCart} from "../../../utils/types";
import Cart from "./cart/cart";
import styles from "./ingredient-carts.module.css"
import {motion} from "framer-motion";

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

function IngredientCarts(props) {
    const carts = props.data
    return (
        <motion.ul variants={container} initial="hidden" animate="show" className={styles.carts}>

            {carts.map(cart => (
                    <motion.li key={cart._id} variants={listItem} >
                        <Cart cart={cart} />
                    </motion.li>
                )
            )
            }
        </motion.ul>
    )
}

IngredientCarts.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(typeCart).isRequired).isRequired,
}


export default IngredientCarts;