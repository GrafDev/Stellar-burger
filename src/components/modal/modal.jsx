import './modal.module.css'
import { useEffect, useMemo} from "react";
import {createPortal} from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay";
import style from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {desetModalOrder} from "../../services/action/oreder-action";
import {desetModalCurrentIngredient} from "../../services/action/current-ingredient-action";
import {typeCart} from "../../utils/types";


function Modal(props) {
	const element = useMemo(() => document.createElement('div'), []);
	const dispatch=useDispatch();

	const modalRootElement = document.getElementById('react-modals');

	useEffect(() => {
		modalRootElement.appendChild(element);
		return () => {
			modalRootElement.removeChild(element);
		};
	});

	const closeModal= ()=>{
		dispatch(desetModalOrder())
		dispatch(desetModalCurrentIngredient())
	}

	useEffect(() => {
		const handleEscape = ({key}) => {
			if (key === 'Escape') closeModal()
		}
		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	});



	return createPortal(
		<ModalOverlay>
			<div className={style.modal}>
				<div className={style.closeCross} onClick={closeModal} >
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