import React from 'react';
import styles from './ExpenseIncome.module.scss';
import Currency from '../utils/Currency';

const Amount = ({ title, amount }) => {
  return (
    <div className={styles.amount}>
      <h2>{title}</h2>
      <h3
        className={`${
          title.toLowerCase() === 'expense' ? styles.expense : styles.income
        }`}
      >
        <Currency />
        {amount}
      </h3>
    </div>
  );
};

export default Amount;
