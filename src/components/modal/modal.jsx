import './modal.module.css'
import {useContext, useEffect, useMemo} from "react";
import contexts from "../../utils/contexts";
import {createPortal} from "react-dom";
import ModalOverlay from "./modal-overlay/modal-overlay";
import style from "./modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";


function Modal(props) {
	const element = useMemo(() => document.createElement('div'), []);
	const value = useContext(contexts);

	const modalRootElement = document.getElementById('react-modals');

	useEffect(() => {
		modalRootElement.appendChild(element);
		return () => {
			modalRootElement.removeChild(element);
		};
	});

	const handlerCross= ()=>{
		value.closeModal()
	}

	useEffect(() => {
		const handleEscape = ({key}) => {
			if (key === 'Escape') value.closeModal()
		}
		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	});



	return createPortal(
		<ModalOverlay>
			<div className={style.modal}>
				<div className={style.closeCross} onClick={handlerCross} >
					<CloseIcon type="primary"/>
				</div>
				{props.children}
			</div>
		</ModalOverlay>
		, element)

}

Modal.propTypes = {
	children: PropTypes.element.isRequired //Добавил
};
export default Modal;