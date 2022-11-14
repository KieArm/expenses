import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    { id: 1, text: 'Salary', amount: 3000 },
    { id: 2, text: 'Mortgage', amount: -1100 },
    { id: 3, text: 'Food', amount: -500 },
    { id: 4, text: 'Transport', amount: -150 },
    { id: 5, text: 'Utilities', amount: -450 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

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
