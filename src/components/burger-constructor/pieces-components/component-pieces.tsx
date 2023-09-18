import ConstructorCart from "../constructor-cart/conctructor-cart";
import EmptyConstructorElement from "../empty-constructor-element/empty-constructor-element";
import styles from "./component-pieces.module.css"
import {IConstructorCart} from "../../../utils/types";
import {FC} from "react";


type TProps={
    pieces:Array<IConstructorCart>
}

const Pieces:FC<TProps> =(props:TProps) =>{
const pieces:Array<IConstructorCart> =props.pieces
    return (<div className={styles.pieces}>
        {
            pieces.length > 0 ?
                pieces.map((elem:IConstructorCart, index:number) =>
                    <ConstructorCart elem={elem} key={elem.constructorId} index={index}/>
                ) :
                <div className={styles.pieces}>
                    <EmptyConstructorElement />
                </div>}
    </div>
    )
}

export default Pieces;