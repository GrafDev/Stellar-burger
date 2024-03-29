import {FC} from 'react';
import style from './order-details.module.css';
import done from "../../images/modal/burger-ok-tick.png";

interface IOrderDetails {
    orderDetails: number | undefined,
    onClose: () => void
}

const OrderDetails: FC<IOrderDetails> = ({orderDetails, onClose}) => {
    return (
        <>
            <div className={`${style.wrapper} mt-30 mb-30`}>
                <h2 className={`OrderDetailsTitle  ${style.number} text text_type_digits-large mb-8`}>{orderDetails}</h2>
                <p className={`text text_type_main-medium mb-2`}>идентификатор заказа</p>
                <div className={style.checkMarkIcon} onClick={onClose}>
                    <img className={`${style.img} mb-2`} src={done} alt="tiks"/>
                </div>
                <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
                <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной
                    станции</p>
            </div>
        </>
    )
}

export default OrderDetails

