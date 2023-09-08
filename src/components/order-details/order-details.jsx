import React from "react";
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

function OrderDetails() {

	const dispatch=useDispatch();

	const orderId=useSelector(getOrderId)

	const handlerOverlay = ()=>{
		dispatch(unsetToolOrder())
	}

	return (
		<Modal>
			<div className={style.modal}>
				<div className={`${style.digit} ${digitsLarge}`}>{orderId}</div>
				<div className={`${style.text01} ${textMedium}`}>Идентификатор заказа</div>
				<div className={style.checkMark}>
					<div className={style.checkMarkIcon} onClick={handlerOverlay}>
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

OrderDetails.propTypes = {
	orderId: PropTypes.string.isRequired,
};





export default OrderDetails;