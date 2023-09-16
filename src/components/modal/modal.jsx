import {useCallback, useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
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



	const closeFunc = useCallback(() => {
		if (location.state?.background) navigate(location.state.background)
	}, [location.state, navigate,dispatch])


	useKeyPress('Escape', closeFunc)



	return createPortal(
		<ModalOverlay closeFunc={closeFunc}>
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