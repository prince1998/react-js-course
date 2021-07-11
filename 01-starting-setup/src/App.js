import React from "react"; //Imported react to demonstrate JSX - previosly had to import it everytime but with create-react-app we dont need to import this
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  //App is a component
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // createElement has 3 arguments
  // (name of HTML element, attributes of the HTML element, content of the HTML element)
  // Since div is a wrapper here, this is why we need root elements in JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  //The below JSX code is transformed into above code by react
  // Commented to demonstrate React method createElement if not using create-react-app
  return (//This is jsx syntax by React. It allows to put HTML code inside JS. // items is user defined variable; same to be used in Expenses.js file
    <div>
      <NewExpense />
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
