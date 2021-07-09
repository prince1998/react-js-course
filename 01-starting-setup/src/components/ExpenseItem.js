
import ExpenseDate from './ExpenseDate';
//Import CSS
import './ExpenseItem.css';

//Custom Component
//Convention is to keep the function name same as file name
//We can have only one root element in return; therefore we wr ed everything inside div and returned div
function ExpenseItem(props) {
  
  return (
    <div className = "expense-item"> 
    <ExpenseDate date = {props.date} />
      <div className  = "expense-item__description">
        <h2>{props.title}</h2>
        <div className = "expense-item__price">Rs. {props.amount}</div>
      </div>
    </div>
  );
}

//You can even perform calculations like 2+2 or use math functions inside curly brackets.
export default ExpenseItem; //export function to make it available to other files
