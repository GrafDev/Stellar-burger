import '../modal.module.css'
import style from './modal-overlay.module.css';
import PropTypes from "prop-types";



function ModalOverlay(props) {

	const _closeFunc = props.closeFunc

	const handlerClick = (event) => {
		event.target.id === 'targetOverlay' &&
		_closeFunc()
	};


	return (
		<div className={style.overlay} id='targetOverlay' onClick={handlerClick}>
			{props.children}
		</div>
	)
}

ModalOverlay.propTypes = {
	children: PropTypes.element.isRequired,
	closeFunc: PropTypes.func.isRequired
};

export default ModalOverlay;

