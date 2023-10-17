import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from '../../hooks/store-hooks';
import ProfileHistoryOrders from '../../components/profile-history-orders/profile-history-orders';
import style from './profile-orders-page.module.css'
import { wsAuthConnectionStart, wsAuthConnectionClosed } from '../../redux/actions/ws-auth-actions';
import { BASE_WSS } from '../../hooks/request-hook';

const ProfileOrdersPage: FC = () => {
  const dispatch = useDispatch();
  const { authOrders } = useSelector(state => state.wsAuthOrders);

  useEffect(() => {
    dispatch(wsAuthConnectionStart(`${BASE_WSS}/orders`))
    return () => {
      dispatch(wsAuthConnectionClosed())
    };
  }, [dispatch]);

  return (
    <div className={`${style.container}`}>
      <div className={`${style.history__wrapper}`}>
        <ProfileHistoryOrders orders={authOrders} />
      </div>
    </div>
  )
}

export default ProfileOrdersPage