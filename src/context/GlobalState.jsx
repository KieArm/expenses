import React, { createContext, useEffect, useReducer, useState } from 'react';
import AppReducer from './AppReducer';
import { toast } from 'react-toastify';

export const checkLocalStorage = () => {
  const savedData = JSON.parse(localStorage.getItem('trackerData'));
  if (savedData) {
    return savedData;
  } else {
    setTimeout(() => {
      if (window.location.pathname === '/') {
        toast.success('Welcome, sample data loaded');
      }
    }, 1000);
    return {
      showChart: true,
      transactions: [
        { id: 'afca1e40-067d-47f8-afd1-614e1d078738', text: 'Salary', amount: 2680 },
        { id: 'f232414d-053b-40fb-a8ca-1c6dac52db1f', text: 'Mortgage', amount: -1125 },
        { id: '4e6dd687-a954-4203-b303-01cd48f42328', text: 'Food', amount: -420 },
        { id: 'c93a25d1-f85a-4d25-b3ce-515fa3b4d408', text: 'Transport', amount: -150 },
        { id: '02995430-181d-415f-a06c-b89dd7d49154', text: 'Utilities', amount: -350 },
      ],
    };
  }
};
const initialState = checkLocalStorage();

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
    toast.success('Transaction deleted');
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
    toast.success('Transaction added');
  }

  function clearData() {
    dispatch({
      type: 'CLEAR_DATA',
    });
    toast.success('All saved data deleted');
  }

  function toggleChart() {
    dispatch({
      type: 'TOGGLE_CHART',
      payload: !state.showChart,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        chart: state.showChart,
        deleteTransaction,
        addTransaction,
        clearData,
        toggleChart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
