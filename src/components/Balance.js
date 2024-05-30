import React from 'react'
import './css/Balance.css'
import { useSelector } from 'react-redux';

const Balance = () => {
  const { balance } = useSelector(state => state.transaction);
  return (
    <div className='balance-container'>
      <div className='balance-title'>Your Balance</div>
      <div className='balance-amount'>${balance}</div>
    </div>
  )
}

export default Balance
