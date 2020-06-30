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
  currency: 'TRY',
};

// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem('exp-inc-app-state');
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem('exp-inc-app-state', JSON.stringify(state));
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

  const changeCurrency = (currency) => {
    dispatch({
      type: 'CHANGE_CURRENCY',
      payload: currency,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        currency: state.currency,
        deleteTransaction,
        addTransaction,
        changeCurrency,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
