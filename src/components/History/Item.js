import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import styles from './History.module.scss';
import Currency from '../utils/Currency';

const Item = ({ id, name, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div
      className={`${styles.item} ${
        amount < 0 ? styles.expense : styles.income
      }`}
    >
      <button
        className={styles.deleteBtn}
        onClick={() => deleteTransaction(id)}
      >
        Delete
      </button>
      <p>{name}</p>
      <p>
        {amount > 0 ? '+' : '-'}
        <Currency />
        {Math.abs(amount)}
      </p>
    </div>
  );
};

export default Item;
