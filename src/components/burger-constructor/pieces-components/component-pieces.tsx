import ConstructorCart from "../constructor-cart/conctructor-cart";
import EmptyConstructorElement from "../empty-constructor-element/empty-constructor-element";
import styles from "./component-pieces.module.css"
import {IConstructionCart} from "../../../utils/types";


type TProps={
    pieces:Array<IConstructionCart>
}

const Pieces =(props:TProps) =>{
const pieces:Array<IConstructionCart> =props.pieces
    return (<div className={styles.pieces}>
        {
            pieces.length > 0 ?
                pieces.map((elem:IConstructionCart,index:number) =>
                    <ConstructorCart elem={elem} key={elem.constructorId} index={index}/>
                ) :
                <div className={styles.pieces}>
                    <EmptyConstructorElement type={''}/>
                </div>}
    </div>
    )
}

export default Pieces;