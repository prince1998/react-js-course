import React from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) =>
    { const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
      props.onAddExpense(expenseData); // By passing expenseData, we are lifing our state up (lifitng data from child component to parent component) from NewExpense Component to App Component
    };

    return ( <div className = "new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
    );
}

export default NewExpense;