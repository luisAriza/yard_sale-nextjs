import React from 'react';
import OrderItem from '@components/OrderItem';
import styles from '@styles/OrdersList.module.scss';

function OrderList() {
  return (
    <section className={styles['orders-container']}>
      <h1 className={styles['orders-container__title']}>My orders</h1>
      <div className={styles['orders-container__content']}>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </section>
  );
}

export default OrderList;
