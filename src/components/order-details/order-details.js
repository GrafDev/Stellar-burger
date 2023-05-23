import React, {useContext} from "react";
import {digitsLarge, inactiveDefault, textDefault, textMedium} from "../../utils/themes";
import style from "./order-details.module.css"
import vector from '../../images/vector.svg'
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Context from "../../utils/contexts";

function OrderDetails() {

	const value = useContext(Context);

	const handlerOverlay = ()=>{
		value.closeModal()
	}

	return (
		<div className={style.modal}>
			<div className={`${style.digit} ${digitsLarge}`}>32242</div>
			<div className={`${style.text01} ${textMedium}`}>Идентификатор заказа</div>
			<div className={style.checkMark}>
				<div className={style.checkMarkIcon} onClick={handlerOverlay}>
					<CheckMarkIcon type={'primary'}/>
				</div>
				<img className={style.vector} src={vector} alt={'vector'}/>
			</div>
			<div className={`${style.text02} ${textDefault}`}>Ваш заказ начали готовить</div>
			<div className={`${style.text03} ${inactiveDefault}`}>Дождитесь готовности на орбитальной станции</div>
		</div>
	)
}

export default OrderDetails;