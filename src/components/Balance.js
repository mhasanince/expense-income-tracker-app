import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import styles from './Balance.module.scss';
import CurrencyController from './utils/CurrencyController';
import Currency from './utils/Currency';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.reduce(
    (acc, currentVal) => acc + currentVal.amount,
    0
  );
  return (
    <div className={styles.balanceContainer}>
      <div className={styles.balance}>
        <h2 className={styles.title}>Your Balance</h2>
        <h3 className={styles.amount}>
          <Currency />
          {amount.toFixed(2)}
        </h3>
      </div>
      <div className={styles.currency}>
        <CurrencyController />
      </div>
    </div>
  );
};

export default Balance;
