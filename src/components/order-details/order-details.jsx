import React, {useCallback} from "react";
import {digitsLarge, inactiveDefault, textDefault, textMedium} from "../../utils/constants/text-style-constants";
import style from "./order-details.module.css"
// import vector from '../../images/vector.svg'
import burger from '../../images/burger-3.png'
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";

import {unsetToolOrder} from "../../redux/features/order/orderSlice";
import {getOrderId} from "../../redux/features/order/order-selectors";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import useKeyPress from "../../hooks/useKeyPress";
import {useLocation, useNavigate} from "react-router-dom";

function OrderDetails() {

	const dispatch=useDispatch();
	const location=useLocation();
	const navigate = useNavigate();

	const orderId=useSelector(getOrderId)



	const closeFunc = useCallback(() => {
		dispatch(unsetToolOrder())

		if (location.state?.background) navigate(location.state.background)
	}, [location.state, navigate,dispatch])


	return (
		<Modal>
			<div className={style.modal}>
				<div className={`${style.digit} ${digitsLarge}`}>{orderId}</div>
				<div className={`${style.text01} ${textMedium}`}>Идентификатор заказа</div>
				<div className={style.checkMark}>
					<div className={style.checkMarkIcon} onClick={closeFunc}>
						<CheckMarkIcon type={'primary'}/>
					</div>
					<img className={style.vector} src={burger} alt={'vector'}/>
				</div>
				<div className={`${style.text02} ${textDefault}`}>Ваш заказ начали готовить</div>
				<div className={`${style.text03} ${inactiveDefault}`}>Дождитесь готовности на орбитальной станции</div>
			</div>
		</Modal>

	)
}





export default OrderDetails;