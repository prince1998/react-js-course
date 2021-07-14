import React, { useState } from "react";
import Card from "../UI/Card"; // Wrapper for Expenses
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2020");
  //ExpensesFilter is a controlled component because Expenses has all the logic for Filtering Year whereas ExpensesFilter just presents the dropdown
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  };

  const filteredExpenses = 
    props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear; 
    });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id} //can be added to html element or your own custom element to avoid bugs and performance issues and tell React how to arrange if a new items comes in
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
