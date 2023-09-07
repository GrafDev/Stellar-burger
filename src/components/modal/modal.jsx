import {useCallback, useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import {unsetToolOrder} from "../../redux/features/order/orderSlice";
import {unsetCurrentIngredient} from "../../redux/features/currentIngredient/currentIngredientSlice";
import ModalOverlay from "./modal-overlay/modal-overlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {createPortal} from "react-dom";
import style from './modal.module.css'
import {useLocation, useNavigate} from "react-router-dom";
import useKeyPress from "../../hooks/useKeyPress";

function Modal(props) {
	const element = useMemo(() => document.createElement('div'), []);
	const dispatch=useDispatch();
	const navigate = useNavigate()
	const location = useLocation()

	const modalRootElement = document.getElementById('react-modals');

	useEffect(() => {
		modalRootElement.appendChild(element);
		return () => {
			modalRootElement.removeChild(element);
		};
	});


	useEffect(() => {
		const handleEscape = ({key}) => {
			if (key === 'Escape') closeFunc()
		}
		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	});


	const closeFunc = useCallback(() => {
		if (location.state?.background) navigate(location.state.background)
		dispatch(unsetToolOrder())
		dispatch(unsetCurrentIngredient())
	}, [location.state, navigate,dispatch])

	// Handling Escape press
	useKeyPress('Escape', closeFunc)



	return createPortal(
		<ModalOverlay>
			<div className={style.modal}>
				<div className={style.closeCross} onClick={closeFunc} >
					<CloseIcon type="primary"/>
				</div>
				{props.children}
			</div>
		</ModalOverlay>
		, element)

}

Modal.propTypes = {
	children: PropTypes.element.isRequired
};
export default Modal;