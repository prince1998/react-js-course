# Refreshing array functions

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const numbers = [1,2,3];

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});
console.log(numbers);                
console.log(doubleNumArray);
```

Output
```js
[1, 2, 3]
[2, 4, 6]
```