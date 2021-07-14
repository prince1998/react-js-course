import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // Separate states
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState(''); //You can have multiple states per component so can use useState for each component; States in these componenets are separated from each other
    
    //State combined into one
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '', //Intial Form values are blank
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        //When state separate, use this:
        setEnteredTitle(event.target.value);

        // For combined state
        // setUserInput({
        //     ...userInput, //spread operator; to copy existing userInput state values 
        //     enteredTitle: event.target.value, //to update the title
        // });

        //To prevent synchronization problem and get the latest state everytime in prevState
        // setUserInput((prevState) => { 
        //     return { ...prevState, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        // When state separate, use this:
        setEnteredAmount(event.target.value);
        
        // For combined state
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value, //Event Target Value is always a string 
        // }); 
    };

    const dateChangeHandler = (event) => {
        // When state separate, use this:
        setEnteredDate(event.target.value);

        // For combined state
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,  
        // }); 
    };

    const submitHandler = (event) => {
        event.preventDefault(); // JavaScript function to prevent page reload
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),//since enteredDate will be string, we need to convert into Date object
        };
        props.onSaveExpenseData(expenseData); //Calling parent (NewExpense) onSaveExpenseData function
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input type = "text" value = {enteredTitle} onChange = {titleChangeHandler} /> 
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type = "number" min = "0.01" step = "0.01" value = {enteredAmount} onChange = {amountChangeHandler} />
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type = "date" min = "2019-01-01" max = "2020-12-31" value = {enteredDate} onChange = {dateChangeHandler} />
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;