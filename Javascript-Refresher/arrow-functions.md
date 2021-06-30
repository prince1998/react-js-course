# Arrow Functions

### Normal Function syntax
function myFunc() {

}

### Arrow Function syntax
const myFunc = () => {

}
 
### Why arrow functions was introducted?
No more issues with the 'this' keyword!
In arrow functions, this will always keep its context and not change during runtime.

### Examples
```js
// Normal Function
function printMyName(name) {
  console.log(name);
} 

printMyName("Max");

// Arrow Functions
// Passing a single parameter
const printMyNameArrow = name => {
  console.log(name);
}

printMyNameArrow("Priyansh");

// Passing no parameters
const printMyNameArrowInsideFunction = () => {
  console.log("Priyansh");
}

printMyNameArrowInsideFunction();

// Passing 2 parameters
const printMyInfo = (name,age) => {
  console.log(name + " is " + age + " years old! ");
}

printMyInfo("Priyansh",22);

//Returning a value
var multiply = (number) => {
  return number * 2;
}

console.log(multiply(2));

// Shorthand for return
multiply = number => number * 2;
console.log(multiply(4));
```