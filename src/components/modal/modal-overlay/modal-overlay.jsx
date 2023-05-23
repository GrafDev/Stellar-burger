import '../modal.module.css'
import {useContext} from "react";
import style from './modal-overlay.module.css';
import contexts from "../../../utils/contexts";
import PropTypes from "prop-types";


function ModalOverlay(props) {
	const value = useContext(contexts);


	const handlerClick= (event)=>{
		event.target.id==='targetOverlay' && value.closeModal();
	}
	return (
		<div className={style.overlay} id='targetOverlay' onClick={handlerClick} >
			{props.children}
		</div>
	)
}

ModalOverlay.propTypes = {
	children: PropTypes.element.isRequired
};

export default ModalOverlay;

