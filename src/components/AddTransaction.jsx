import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || text === '') {
      toast.error('Please enter a name');
      return;
    } else if (!amount || amount === 0) {
      toast.error('Please enter an amount');
      return;
    } else {
      const newTransaction = {
        id: uuidv4(),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
      setText('');
      setAmount('');
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Name:</label>
          <input id='text' type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount:</label>
          <input id='amount' type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
