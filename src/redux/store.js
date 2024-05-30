import { configureStore } from '@reduxjs/toolkit'
import TransactionReducer from './transactionSlice.js'

export default configureStore({
  reducer: {
    transaction: TransactionReducer,
  },
})