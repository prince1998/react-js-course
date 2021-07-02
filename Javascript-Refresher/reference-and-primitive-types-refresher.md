# Reference and Primitive Types refresher

### Primitive Type

Numbers, String and booleans are primitive types.
When you store the variable in another variable, it will copy the value.

```js
const number = 1;
const num2 = number;

console.log(num2);
```
Output
```
1
```

### Reference Type
Objects and Array are reference types

```js
const person = {
    name: "Max"
};

const secondPerson = person;
person.name = "Manu";
console.log(secondPerson);
```
Output
```js
[object Object] {
  name: "Manu"
}
```
Here, we get the output as "Manu" even though we changed person's name value after initializing secondPerson. This is becasue, secondPerson here stores the pointer to person object. person contains the pointer to person object and when secondPerson is initialized, it also stores the person's pointer. 
Therefore, the object value is passed by reference. 

One way to deal with this is to use, spread operator. Spread operator will make a copy of all the object properties and then initilize it to secondPerson.

Eg:
```js
const person = {
    name: "Max"
};

const secondPerson = {
    ...person
};
person.name = "Manu";
console.log(secondPerson);
```
Output
```js
[object Object] {
  name: "Max"
}
```