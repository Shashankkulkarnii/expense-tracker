import React from 'react'
import './css/ShowIncExpNums.css';
import { useSelector } from 'react-redux';

function ShowIncExpNums() {
  const { income, expense} = useSelector( state => state.transaction);
  return (
    <div className='inc-exp-container'>
        <div className='amount-container'>
            <div>INCOME</div>
            <div className='income'>${income}</div>
        </div>
        <div className='divider'>
        </div>
        <div className='amount-container'>
            <div>EXPENSE</div>
            <div className='expense'>${expense}</div>
        </div>
    </div>
  )
}

export default ShowIncExpNums