import styles from './empty-constructor-element.module.css'
import {BOTTOM, TOP} from "../../../utils/constants/ingredient-constants";
import {TTypeBun} from "../../../utils/types";
import {FC} from "react";

type TProps = {
    type?: TTypeBun
}
const EmptyConstructorElement: FC<TProps> = (props: TProps) => {
    const type: TTypeBun | undefined = props.type;
    let style
    let text: string = 'Выберите булку';

    switch (type) {
        case (TOP):
            style = styles.bunTop;
            break;
        case (BOTTOM):
            style = styles.bunBottom;
            break;
        default:
            style = styles.list;
            text = 'Выберите начинку'
    }
    return (
        <div className={style}>
            {text}
        </div>
    );
}

export default EmptyConstructorElement;