import React from 'react'
import './css/AddTransactionForm.css';
import { useFormik } from 'formik';
import { addNewTransactionSchema } from './validationSchema';
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction } from '../redux/transactionSlice';
import SectionTitle from "./designComponents/SectionTitle.js";


function AddTransactionForm() {

  const dispatch = useDispatch();
  const transactionState = useSelector(state => state.transiction);
  console.log(transactionState);

  const addNewTransaction = (values, { resetForm }) => {
    const transictionData = {
      description: values.description,
      amount: Number(values.amount)
    }
    console.log(transictionData);
    dispatch(addTransaction(transictionData));
    resetForm();
  }
  const formik = useFormik({
    initialValues: {
      description: "",
      amount: 0
    },
    validationSchema: addNewTransactionSchema,
    onSubmit: addNewTransaction
  });
  const { handleChange, handleBlur, values, errors, handleSubmit } = formik;
  
  return (
    <div className="section-container">
        <SectionTitle title="Add New Transaction"/>
          <form className='transaction-form' onSubmit={handleSubmit}>
            <div className='transaction-form'>
              <div className='form-field-container'>
                <div className='field-label'>Text</div>
                <input type="text" name="description" placeholder='Enter text...' value={values.description} onBlur={handleBlur} onChange={handleChange}/>
                <div className='errors'>{errors.description && errors.description}</div>
              </div>
              <div className='form-field-container'>
                <div className='field-label'>Amount</div>
                <div>(negative - expense, positive - income)</div>
                <input type="text" name="amount" placeholder='Enter amount...' value={values.amount} onBlur={handleBlur} onChange={handleChange}/>
                <div className='errors'>{errors.amount && errors.amount}</div>
              </div>
                <input className='submit-button' type="submit" value="Add transaction"/>
            </div>
          </form>
    </div>
  )
}

export default AddTransactionForm