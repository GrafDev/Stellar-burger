import styles from './empty-constructor-element.module.css'
function EmptyConstructorElement (props) {
    const type=props.type;
    let style
    let text='Выберите булку';

    switch (type){
        case ('top'):
            style=styles.bunTop;
            break;
        case ('bottom'):
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