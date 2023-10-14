import { useNavigate } from 'react-router-dom';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, useMemo } from 'react';
import { ORDER_ITEMS_RESET } from '../../types/constants-types/orders-types';
import { postOrder } from '../../redux/actions/order-actions';
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import style from './purchase-amount.module.css';
import { ITypeIngredient } from '../../types/ingredients-types';
import { useSelector, useDispatch } from '../../hooks/store-hooks';

interface IPurchaseAmount {
  ingredients: Array<ITypeIngredient>
  buns: ITypeIngredient;
}

const PurchaseAmount: FC<IPurchaseAmount> = ({ ingredients, buns }) => {
  const dispatch = useDispatch();
  const { orderDetails, request } = useSelector(state => state.order);
  const { form: user } = useSelector(state => state.user);
  const navigate = useNavigate();

  const sendOrder = () => {
    const idIngredients = [buns._id, ...ingredients.map(item => item._id), buns._id];
    user ? dispatch(postOrder(idIngredients)) : navigate('/login');
  }

  let handleClose;
  
  if (request) {
    handleClose = () => undefined
  } else {
    handleClose = () => { dispatch({ type: ORDER_ITEMS_RESET }) }
  }
 
  const totalPrice = useMemo(() => {
    const ingredientPrice = ingredients.reduce((sum, item) => { return item.price + sum }, 0)
    return ingredientPrice + (buns.price * 2)
  }, [ingredients, buns])

  return (
    <section className={`${style.purchaseAmount__wrapper} mt-10 mr-5`}>
      <span className={`text text_type_digits-medium mr-10`}>
        {totalPrice}
        <CurrencyIcon type='primary' />
      </span>
      <Button htmlType="button" type="primary" size="large" onClick={sendOrder}>
        {request
          ? <p className={`text text_type_main-small ${style.purchaseAmount__loading_button}`}>Оформляем заказ...</p>
          : `Оформить заказ`}
      </Button>
      {
        (request || orderDetails) && (
          <Modal onClose={handleClose} >
            {request
              ? <p className={`text text_type_main-small ${style.purchaseAmount__loading}`}>Оформляем заказ, подождите...</p>
              : <OrderDetails orderDetails={orderDetails} onClose={handleClose} />
            }
          </Modal>
        )}
    </section>
  )
};

export default PurchaseAmount