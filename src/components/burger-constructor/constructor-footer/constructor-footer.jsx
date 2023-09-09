import {digitsMedium} from "../../../utils/constants/text-style-constants";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback, useMemo} from "react";
import styles from "./constructor-footer.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setToolOrder} from "../../../redux/features/order/orderSlice";
import {getConstructorIngredients} from "../../../redux/features/constructor/constructor-selectors";
import {getAuthUser} from "../../../redux/features/auth/auth-selectors";
import {LOGIN_LINK, ORDER_LINK} from "../../../utils/constants/router-link-constants";
import {useLocation, useNavigate} from "react-router-dom";
import TotalCost from "./total-cost/total-cost";


function ConstructorFooter() {

    const order=useSelector(getConstructorIngredients)
    const IsAuth = useSelector(getAuthUser)
    const navigate = useNavigate()
    const location = useLocation()





    const dispatch = useDispatch()

    const handleOrderClick = useCallback(() => {

        if (!IsAuth) navigate(LOGIN_LINK)
        else {
            dispatch(setToolOrder())
            navigate(ORDER_LINK, {state: {background: location}})
        }

    }, [IsAuth, navigate, dispatch])


    return (
        <div className={styles.button}>
            <TotalCost order={order}/>
            <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
                Оформить заказ
            </Button>
        </div>
    )
}



export default ConstructorFooter;