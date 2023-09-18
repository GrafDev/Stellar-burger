import React, {FC} from 'react';
import styles from './order-history.module.css'

const OrderHistory:FC = () => {

  return (
    <div  className={styles.order}>
            <h2>
                Coming soon...
            </h2>
    </div>
  )
}

export default React.memo(OrderHistory)
