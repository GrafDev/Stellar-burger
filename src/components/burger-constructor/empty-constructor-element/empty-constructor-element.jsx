import styles from './empty-constructor-element.module.css'
import {BOTTOM, TOP} from "../../../utils/constants/ingredient-constants";
function EmptyConstructorElement (props) {
    const type=props.type;
    let style
    let text='Выберите булку';

    switch (type){
        case (TOP):
            style=styles.bunTop;
            break;
        case (BOTTOM):
            style=styles.bunBottom;
            break;
        default:
            style=styles.list;
            text='Выберите начинку'
    }
    return (
        <div className={style}>
            {text}
        </div>
    );
}

export default EmptyConstructorElement;