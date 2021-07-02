# Destructuring

Destructuring is used to easily extract array elements or object properties and store them in variables

## Array Destructuring
```js
[a,b] = ['Hello','Max']
console.log(a); // Hello
console.log(b); // Max
```

Eg:

```js
//Array Destructuring
const numbers = [1,2,3];
[num1,num2] = numbers;
console.log(num1,num2);
```

Output
```
1
2
```

Eg:
```js
//Array Destructuring
const numbers = [1,2,3];
[num1, , num3] = numbers;
console.log(num1,num3);
```

Output
```
1
3
```

## Object Destructuring

```js
{name} = {name:'Max', age: 28}
console.log(name); // Max
console.lo(age); // undefined
``` 

And here for an object:
```js
const myObj = {
    name: 'Max',
    age: 28
}

const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
```

Destructuring is very useful when working with function arguments. Consider this example:
```js
const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'
```
Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:
```js
const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')
```
We get the same result as above but we save some code. By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.