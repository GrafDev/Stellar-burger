import ConstructorCart from "../constructor-cart/conctructor-cart";
import EmptyConstructorElement from "../empty-constructor-element/empty-constructor-element";
import styles from "./component-pieces.module.css"
import PropTypes from "prop-types";
import {typeCart} from "../../../utils/types";
import Bun from "./component-bun";
const Pieces =({pieces}) =>{

    return (<div className={styles.pieces}>
        {
            pieces.length > 0 ?
                pieces.map((elem,index) =>
                    <ConstructorCart elem={elem} key={elem.constructorId} index={index}/>
                ) :
                <div className={styles.pieces}>
                    <EmptyConstructorElement type={''}/>
                </div>}
    </div>
    )
}

Pieces.propTypes = {
    pieces: PropTypes.arrayOf(PropTypes.shape(typeCart).isRequired).isRequired,
}
export default Pieces;