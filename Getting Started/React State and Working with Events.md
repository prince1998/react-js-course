# React State and Working with Events

To add a click event to button in JSX code and use anonymous functino:

```html
<button onClick = {() => {console.log("Title Changed!")}}>Change Title</button>
```

While calling a function we always point to it; so we do not put round brackets around the function while trigerring that function

Eg:
```html
<input type = "text" onChange = {titleChangeHandler}/>
```
Here titleChangeHandler does not end with '()' since its just pointing to titleChangeHandler function already defined'

## Adding two-way binding

For inputs we dont just listen to changes, but we can also pass a new value back into the input so we can reset or change the input programatically. So that we change the state, we also change the input.
Its useful when we want to reset or change input after form submission.
We can do this by specifying the binding in the 'value' parameter of input.

## Lifting the state up
Lifting the state up means lifting data from child component to parent component either to use it there, or to pass it down to some other child component.
The goal is to lift up just as high as necessary in your Component Tree until you have a component which has both access to component that generate the data as well as the component that need the data

## Controlled vs Uncontrolled Components & Stateless vs Stateful components

Whenever you use a two-way binding, you are controlling a component.
ExpensesFilter is a controlled component because Expenses has all the logic for Filtering Year whereas ExpensesFilter just presents the dropdown

Stateless vs Stateful components\
Stateless components just output data\
Stateless component is also called dumb component or presentational component\
Eg. ExpenseItem component


Stateful components contains logic for manipulating state\
Stateful components are also called smart components
Eg. Expenses components which manages filter state or the ExpenseForm component which manages the input state

React doesn't care whether you changed some variable values. It'll not re-evaluate the component function. It only does that for changes to registered state values (created via useState)

In JavaScript, function is also and object 

You can have as many state slices as you need