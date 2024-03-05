import React, { useContext } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';

export const BarChart = () => {
  const { transactions, chart } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <>
      {chart && (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Bar
            data={{
              labels: ['Income', 'Expense'],
              datasets: [
                {
                  label: [],
                  backgroundColor: ['#41B883', '#DD1B16'],
                  data: [income, expense],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      )}
    </>
  );
};
