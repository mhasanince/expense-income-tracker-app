import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import Title from '../Title';
import Item from './Item';
import styles from './History.module.scss';

const History = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className={styles.history}>
      <Title title="History" />
      <div className={styles.transactionList}>
        {transactions.map((transaction) => (
          <Item
            key={transaction.id}
            id={transaction.id}
            name={transaction.text}
            amount={transaction.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
