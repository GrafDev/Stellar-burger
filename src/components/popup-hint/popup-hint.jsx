import {createPortal} from 'react-dom'

// Styles
import styles from './popup-hint.module.css'
import {memo} from "react";

const PopupHint = (props) => {
    const _text= props.text
    if (!_text) {
        console.log('render PopupHint null')
        return null}
    return createPortal(
        <div className={styles.wrapper}>
            {_text}
        </div>, document.getElementById('popup-hint'))
}

export default memo(PopupHint)
