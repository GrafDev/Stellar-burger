import '../modal.module.css'
import style from './modal-overlay.module.css';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {DESET_MODAL_ORDER} from "../../../services/action/oreder-action";
import {DESET_MODAL_CURRENT_INGREDIENT} from "../../../services/action/current-ingredient-action";


function ModalOverlay(props) {

	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch({type: DESET_MODAL_ORDER})
		dispatch({type: DESET_MODAL_CURRENT_INGREDIENT})
	}
	const handlerClick = (event) => {
		event.target.id === 'targetOverlay' &&
		closeModal()
	};


	return (
		<div className={style.overlay} id='targetOverlay' onClick={handlerClick}>
			{props.children}
		</div>
	)
}

ModalOverlay.propTypes = {
	children: PropTypes.element.isRequired
};

export default ModalOverlay;

