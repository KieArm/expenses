import { checkLocalStorage } from './GlobalState';

const AppReducer = (state, action) => {
  const saveToLocalStorage = (data) => {
    localStorage.setItem('trackerData', JSON.stringify(data));
  };

  switch (action.type) {
    case 'DELETE_TRANSACTION':
      const deleteTransaction = state.transactions.filter((transaction) => transaction.id !== action.payload);
      saveToLocalStorage({ showChart: state.showChart, transactions: deleteTransaction });
      return {
        ...state,
        transactions: deleteTransaction,
      };
    case 'ADD_TRANSACTION':
      const addTransaction = [action.payload, ...state.transactions];
      saveToLocalStorage({ showChart: state.showChart, transactions: addTransaction });
      return {
        ...state,
        transactions: addTransaction,
      };
    case 'TOGGLE_CHART':
      saveToLocalStorage({ showChart: action.payload, transactions: state.transactions });
      return {
        ...state,
        showChart: action.payload,
      };
    case 'CLEAR_DATA':
      localStorage.clear();
      return checkLocalStorage();
    default:
      return state;
  }
};
export default AppReducer;
