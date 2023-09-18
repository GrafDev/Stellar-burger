import '../modal.module.css'
import style from './modal-overlay.module.css';
import {FC, ReactNode} from "react";
import {TCallbackVoid} from "../../../utils/types";



type TProps={
	closeFunc:TCallbackVoid
	children:ReactNode
}

const ModalOverlay:FC<TProps> = (props:TProps) => {

	const _closeFunc:TCallbackVoid = props.closeFunc

	const handlerClick = (event:any):void => { // TODO: make sense of ANY
		event.target.id === 'targetOverlay' &&
		_closeFunc()
	};


	return (
		<div className={style.overlay} id='targetOverlay' onClick={handlerClick}>
			{props.children}
		</div>
	)
}


export default ModalOverlay;

