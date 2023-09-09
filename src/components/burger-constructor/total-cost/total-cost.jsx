import {digitsMedium} from "../../../utils/constants/text-style-constants";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback, useMemo} from "react";
import styles from "./total-cost.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setToolOrder} from "../../../redux/features/order/orderSlice";
import {getConstructorIngredients} from "../../../redux/features/constructor/constructor-selectors";
import {getAuthUser} from "../../../redux/features/auth/auth-selectors";
import {LOGIN_LINK, ORDER_LINK} from "../../../utils/constants/router-link-constants";
import {useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import {typeCart} from "../../../utils/types";


function TotalCost() {
	const order=useSelector(getConstructorIngredients)
	const IsAuth = useSelector(getAuthUser)
	const navigate = useNavigate()
	const location = useLocation()

	const total=useMemo(()=>{
		const costBun=order.bun!==null ?order.bun.price*2 : 0;
		const costPieces= order.pieces.length!==0? order.pieces.reduce((acc,item)=>acc+item.price ,0):0;
		return costPieces+costBun
	},[order]);


	const dispatch = useDispatch()

	const handleOrderClick = useCallback(() => {

		if (!IsAuth) navigate(LOGIN_LINK)
		else {
			dispatch(setToolOrder())
			navigate(ORDER_LINK, { state: { background: location } })
		}

	}, [IsAuth, navigate, dispatch])


	return (
		<div className={styles.button}>
			<div className={styles.total}>
				<div className={` ${digitsMedium}`}>
					{total}
				</div>
				<div className={styles.icon}>
					<CurrencyIcon type="primary"/>
				</div>
			</div>
			<Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
				Оформить заказ
			</Button>
		</div>
	)
}

TotalCost.propTypes = {
    order: PropTypes.oneOf([
        PropTypes.shape(typeCart).isRequired,
        undefined,
        null,
    ]),
}

export default TotalCost;