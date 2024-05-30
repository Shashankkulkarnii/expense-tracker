import { createSlice } from '@reduxjs/toolkit'

export const TransactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactionList: [],
    income: 0,
    expense: 0,
    balance: 0
  },
  reducers: {
    addTransaction: (state, action) => {
      console.log("payload", action.payload);
      if(action.payload.amount > 0){
        state.income = state.income + action.payload.amount;
      } else {
        state.expense = state.expense + action.payload.amount;
      }
      state.transactionList = [...state.transactionList, action.payload];
      state.balance = state.income + state.expense;
      console.log(state.transactionList)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTransaction, calcultateIncome } = TransactionSlice.actions
export default TransactionSlice.reducer