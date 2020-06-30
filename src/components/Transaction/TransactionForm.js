import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuidv4 } from 'uuid';
import styles from './TransactionForm.module.scss';
import Title from '../Title';

const TransactionForm = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: uuidv4(),
      text: text,
      amount: parseInt(amount),
    });
    setText('');
    setAmount('');
  };

  return (
    <div className={styles.transactionForm}>
      <Title title="Add New Transaction" />
      <form>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text..."
        />
        <label htmlFor="amount">
          <p>Amount</p>
          <p>(negative - expense, positive - income)</p>
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount..."
        />
        <button onClick={handleSubmit}>Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
