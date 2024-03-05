import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { toast } from 'react-toastify';

export const Settings = () => {
  const { clearData, toggleChart, chart } = useContext(GlobalContext);

  const onClear = () => {
    clearData();
  };

  const onToggle = () => {
    toast.success(`Chart ${chart ? 'disabled' : 'enabled'}`);
    toggleChart();
  };

  return (
    <>
      <h2>Settings</h2>
      <div className='container'>
        <button className='btn-clear' onClick={onClear}>
          Reset and delete data
        </button>
        <button className='btn' onClick={onToggle}>
          {chart ? 'Hide Chart' : 'Show Chart'}
        </button>
        <Link to='/'>
          <button className='btn-green'>Done</button>
        </Link>
      </div>
      <div className='container'>
        <h3>About</h3>
        <p>This app was built with React 18, global context, reducers, state, router and local storage.</p>
        <h3>Packages</h3>
        <div className='list-style-none'>
          <li>
            <span>
              Charts - <a href='https://www.npmjs.com/package/chart.js'>chart.js</a> and{' '}
              <a href='https://www.npmjs.com/package/react-chartjs-2'>react-chartjs-2</a>
            </span>
          </li>
          <li>
            <span>
              Notifications - <a href='https://www.npmjs.com/package/react-toastify'>React-Toastify</a>
            </span>
          </li>
          <li>
            <span>
              Unique ID - <a href='https://www.npmjs.com/package/uuid'>uuid</a>
            </span>
          </li>
        </div>
      </div>
    </>
  );
};
