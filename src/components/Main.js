import React from 'react'
import Balance from './Balance'
import ShowIncExpNums from './ShowIncExpNums'
import HistoryList from './HistoryList'
import AddTransactionForm from './AddTransactionForm'
import './css/Main.css'

function Main() {
  return (
    <div className='main-container'>
      <div className='title'>Expense Tracker</div>
      <Balance />
      <ShowIncExpNums />
      <HistoryList />
      <AddTransactionForm />
    </div>
      
  )
}

export default Main