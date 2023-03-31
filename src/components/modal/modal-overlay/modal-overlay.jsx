import '../modal.module.css'
import style from './modal-overlay.module.css';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {desetModalOrder} from "../../../services/action/oreder-action";
import {desetModalCurrentIngredient} from "../../../services/action/current-ingredient-action";


function ModalOverlay(props) {

	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(desetModalOrder())
		dispatch(desetModalCurrentIngredient())
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

