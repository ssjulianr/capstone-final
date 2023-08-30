import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Finance.css'

//Components 
import Budget from './Budget';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';

//Context 
import {AppProvider} from './context/AppContext';

const BudgetTracker = () => {
  return(

    <div>

        <AppProvider>

            <div className = 'budgetContainer'>
                <div className='dream'>
            <h1 className = 'mt-3'>My Budget Planner</h1>
            <br/>
            <h3>Instructions:</h3>
            <p>Adhering to a budget is a vital aspect of achieving financial independence. This interactive Budget Tracker is designed to 
                help you manage a budget of any size. Enter your monthly budget along with anticipated monthly expenses to determine your
                financial potential!
            </p>
                                <div className = 'row mt-3'>
                                <div className = 'col-sm'>
                                    <Budget/>
                                </div>
                                <div className = 'col-sm'>
                                    <Remaining/>
                                </div>
                                <div className = 'col-sm'>
                                    <ExpenseTotal/>
                                </div>
                                </div>
                                <h3 className='mt-3'>Expenses</h3>
                                <div className='row mt-3'>
                                <div className='col-sm'>
                                    <ExpenseList/>
                                </div>
                                </div>
                                <h3 className='mt-3'>Add Expense</h3>
                                <div className='mt-3'>
                                <div className='col-sm'>
                                    <AddExpenseForm/>
                                </div>
                                </div>
                </div>
                   
                </div>

            </AppProvider>

    </div>
    
    
  )
}

export default BudgetTracker;