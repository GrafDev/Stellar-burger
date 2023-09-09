import '../modal.module.css'
import style from './modal-overlay.module.css';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {unsetCurrentIngredient} from "../../../redux/features/currentIngredient/currentIngredientSlice";
import {unsetToolOrder} from "../../../redux/features/order/orderSlice";
import {useCallback} from "react";
import useKeyPress from "../../../hooks/useKeyPress";
import {useLocation, useNavigate} from "react-router-dom";


function ModalOverlay(props) {

	const dispatch = useDispatch();
	const navigate = useNavigate()
	const location = useLocation()

	const closeFunc = useCallback(() => {
		if (location.state?.background) navigate(location.state.background)
	}, [location.state, navigate,dispatch])

	// Handling Escape press
	useKeyPress('Escape', closeFunc)

	const handlerClick = (event) => {
		event.target.id === 'targetOverlay' &&
		closeFunc()
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

