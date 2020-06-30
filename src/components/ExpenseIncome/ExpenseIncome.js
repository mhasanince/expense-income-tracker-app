import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import Amount from './Amount';
import Divider from '../utils/Divider';
import styles from './ExpenseIncome.module.scss';

const ExpenseIncome = () => {
  const { transactions } = useContext(GlobalContext);
  let income = 0,
    expense = 0;
  transactions.map((transaction) =>
    transaction.amount > 0
      ? (income += transaction.amount)
      : (expense += transaction.amount)
  );
  return (
    <div className={styles.expenseIncome}>
      <Amount title="Income" amount={income.toFixed(2)} />
      <Divider />
      <Amount title="Expense" amount={Math.abs(expense).toFixed(2)} />
    </div>
  );
};

export default ExpenseIncome;
