import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import styles from './Balance.module.scss';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.reduce(
    (acc, currentVal) => acc + currentVal.amount,
    0
  );
  return (
    <div className={styles.balance}>
      <h2 className={styles.title}>Your Balance</h2>
      <h3 className={styles.amount}>
        <span className="dolar-sign">$</span>
        {amount.toFixed(2)}
      </h3>
    </div>
  );
};

export default Balance;
