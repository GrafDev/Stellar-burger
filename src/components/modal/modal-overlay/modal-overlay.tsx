import '../modal.module.css'
import style from './modal-overlay.module.css';
import {FC, ReactNode} from "react";


type TProps={
	closeFunc:any
	children:ReactNode
}

const ModalOverlay:FC<TProps> = (props:TProps) => {

	const _closeFunc = props.closeFunc

	const handlerClick = (event:any) => {
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

