# Rendering Lists and Conditional Content

## Rendering Lists of Data
To execute JS code inside JSX use {} (curly braces) 

## Outputting Conditional Content

3 ways to output conditional content in list

1st way:

```jsx
{filteredExpenses.length === 0 ? <p>No expenses found </p> : filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id} //can be added to html element or your own custom element to avoid bugs and performance issues and tell React how to arrange if a new items comes in
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
```

2nd way

Here if the condition is true, the statement after && is executed

```jsx
      {filteredExpenses.length === 0 && <p>No expenses found </p>  }
        {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id} //can be added to html element or your own custom element to avoid bugs and performance issues and tell React how to arrange if a new items comes in
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
```

3rd way:
```jsx
 let expensesContent = <p>No expenses found</p>;
    if (filteredExpenses.length > 0)
    {
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          key = {expense.id} //can be added to html element or your own custom element to avoid bugs and performance issues and tell React how to arrange if a new items comes in
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }
```

and then put expensesContent in curly braces in JSX code wherever you want to output expensesContent
