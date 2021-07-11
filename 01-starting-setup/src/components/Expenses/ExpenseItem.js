import React, {useState} from "react"; //useState is a hook to call a componenet after triggering an event
import Card from '../UI/Card'; // Wrapper for ExpenseItem 
import ExpenseDate from './ExpenseDate';
//Import CSS
import './ExpenseItem.css';

//Custom Component
//Convention is to keep the function name same as file name
//We can have only one root element in return; therefore we wr ed everything inside div and returned div
const ExpenseItem = (props) => {

  // we are using const here because title value is not changed using '=' but using setTitle which is an updating function
  const [title, setTitle] = useState(props.title); //Array Destructuring - useState returns title value and a function to call component and change title when an event occurs
  //title here contains props.title value for initilizing first
  // Each Component instance is stored separately
  // So updating 'Toilet paper' title wont update 'New TV title'

  //convention to end event functions with '*Handler'
  const clickHandler = () => {
    setTitle('Updated!'); //setTitle will call the component again and update the title to "Updated"
    console.log(title); // This doesnt show up properly the first time cos the setTitle function is scheduled and updated value is not available to this yet
    console.log("Expense Item evaluated by React");
  };
  
  //While calling clickHandler in line 26, do not 

  return (
    <Card className = "expense-item"> 
    <ExpenseDate date = {props.date} />
      <div className  = "expense-item__description">
        <h2>{title}</h2>
        <div className = "expense-item__price">Rs. {props.amount}</div>
      </div>
      <button onClick = {clickHandler}>Change Title</button> 
    </Card>
  );
}

//You can even perform calculations like 2+2 or use math functions inside curly brackets.
export default ExpenseItem; //export function to make it available to other files
