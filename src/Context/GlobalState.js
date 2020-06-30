import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer.js';

// Initial State

const initialState = {
  transactions: [
    // { id: 1, text: 'Flower', amount: -20 },
    // { id: 2, text: 'Salary', amount: 300 },
    // { id: 3, text: 'Book', amount: -10 },
    // { id: 4, text: 'Camer', amount: -150 },
  ],
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem('transactions');
    return localData ? JSON.parse(localData) : { transactions: [] };
  });
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state));
  }, [state]);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
