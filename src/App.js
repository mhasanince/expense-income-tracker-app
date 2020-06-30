import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import Balance from './components/Balance';
import ExpenseIncome from './components/ExpenseIncome/ExpenseIncome';
import History from './components/History/History';
import TransactionForm from './components/Transaction/TransactionForm';

import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className={styles.app}>
        <Header />
        <div className={styles.expenseTracker}>
          <Balance />
          <ExpenseIncome />
          <History />
          <TransactionForm />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
