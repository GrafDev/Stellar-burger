import {createPortal} from 'react-dom'
import styles from './popup-hint.module.css'
import {FC, memo, ReactPortal} from "react";
import {motion} from "framer-motion";

type TProps ={
    text:string
}
const PopupHint:FC<TProps> = (props:TProps):ReactPortal|null => {
    const _text = props.text
    if (!_text) {
        return null
    }
    return createPortal(
        <motion.div
            initial={{
                x: 500,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            transition={{
                type: 'spring',

                stiffness: 100,
                damping: 10,
                mass: 1,

            }
            }
            className={styles.wrapper}>
            {_text}
        </motion.div>, document.getElementById('popup-hint')!)
}

export default memo(PopupHint)
