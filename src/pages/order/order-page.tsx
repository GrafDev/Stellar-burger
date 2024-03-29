import { FC, useEffect } from 'react';
import style from './order-page.module.css';
import OrderInformation from '../../components/order-information/order-information';
import { useDispatch } from '../../hooks/store-hooks';
import { wsConnectionStart, wsConnectionClosed } from '../../redux/actions/ws-actions';
import { wsAuthConnectionStart, wsAuthConnectionClosed } from '../../redux/actions/ws-auth-actions';
import { BASE_WSS } from '../../hooks/request-hook';
import { IOrderType } from '../../types/ingredients-types';

interface IOrder {
  data: Array<IOrderType> | null,
  profile: boolean
}

const OrderPage: FC<IOrder> = ({ data, profile }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (profile) {
      dispatch(wsAuthConnectionStart(`${BASE_WSS}/orders`));
      return () => {
        dispatch(wsAuthConnectionClosed())
      };
    } else {
      dispatch(wsConnectionStart(`${BASE_WSS}/orders/all`));
      return () => {
        dispatch(wsConnectionClosed())
      };
    }
  }, [dispatch]);

  
  if (!data?.length) {
    return <p className={`${style.loader} text text_type_main-medium`}>Загрузка данных...</p>
  }

  return (
    <section className={`${style.pageOrder} mt-15`}>
      <OrderInformation data={data} modal={false} />
    </section>
  );
}

export default OrderPage;