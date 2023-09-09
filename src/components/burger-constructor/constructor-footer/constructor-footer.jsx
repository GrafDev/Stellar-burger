import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback, useMemo, useState} from "react";
import styles from "./constructor-footer.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setToolOrder} from "../../../redux/features/order/orderSlice";
import {getConstructorIngredients} from "../../../redux/features/constructor/constructor-selectors";
import {getAuthUser} from "../../../redux/features/auth/auth-selectors";
import {LOGIN_LINK, ORDER_LINK} from "../../../utils/constants/router-link-constants";
import {useLocation, useNavigate} from "react-router-dom";
import TotalCost from "./total-cost/total-cost";
import PopupHint from "../../popup-hint/popup-hint";


function ConstructorFooter() {

    const order=useSelector(getConstructorIngredients)
    const {bun,pieces} = order
    const isPieces = pieces.length > 0
    const _isAuth = useSelector(getAuthUser)
    const navigate = useNavigate()
    const location = useLocation()

    const popupStateInit = useMemo(
        () => ({
            isActive: false,
            text: '',
        }),
        [],
    )
    const [popupState, setPopupState] = useState(popupStateInit)

    const handlePopup = useCallback(
        (_text) => {
            setPopupState({
                isActive: true,
                text: _text,
            })
            setTimeout(() => setPopupState(popupStateInit), 4500)
        },
        [popupStateInit],
    )


    const dispatch = useDispatch()

    const handleOrderClick = useCallback(() => {

        if (!bun && !isPieces){
            handlePopup('Воздух не вкусен, выберите хотя бы один ингредиент и булочку')}

        else if (!bun){
            handlePopup('Какой же бургер без булочки?')}
        else if (!isPieces){

            console.log('ingredients', isPieces)
            handlePopup('Без начинки это не бургер,а шерстявый нюхель с шестой Цефея!')}
        else if (!_isAuth){
            navigate(LOGIN_LINK)}
        else {
            dispatch(setToolOrder())
            navigate(ORDER_LINK, {state: {background: location}})
        }

    }, [bun, isPieces, _isAuth, location, handlePopup, navigate, dispatch])


    return (
        <div className={styles.button}>
            <TotalCost order={order}/>
            <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
                Оформить заказ
            </Button>
            {popupState.isActive && <PopupHint text={popupState.text} />}
        </div>
    )
}



export default ConstructorFooter;