# Spread and Rest operator 

Operator: ... (Three dots :p)

### Spread
The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object.

Used to split up array elements OR object properties

Syntax for array elements:\
```js
const newArray = [...oldArray,1,2]
const newObject = {...oldObject, newProp: 5}
```

Spread eg. on arrays:
```js 
const numbers = [1,2,3];
const newNumbers = [...numbers,4];
console.log(newNumbers);
```

Output:
> [1, 2, 3, 4]

Spread eg. on objects:
```js
const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age:28
};

console.log(newPerson);
```
Output
```
[object Object] {
  age: 28,
  name: "Max"
}
```

### Rest

Used to merge a list of function arguments into an array.

Syntax:
```js
function sortArgs(...args) //you can name anything instead of args 
{
    return args.sort() //we can use array in built functions on args.
}

```

```js
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3,4));
```

Output

`[1]`

=== checks for type and value equality so el has to be a number
