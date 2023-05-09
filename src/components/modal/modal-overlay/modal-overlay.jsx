import '../modal.module.css'
import style from './modal-overlay.module.css';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {unsetCurrentIngredient} from "../../../redux/features/currentIngredient/currentIngredientSlice";
import {unsetToolOrder} from "../../../redux/features/order/orderSlice";


function ModalOverlay(props) {

	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(unsetToolOrder())
		dispatch(unsetCurrentIngredient())
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

