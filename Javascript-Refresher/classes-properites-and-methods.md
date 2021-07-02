# Classes, properties and methods

Properties are like 'variables attached to classes/objects' 

Methods are like 'functions attached to classes/objects' 

## Properties syntax

### ES6
```js 
constructor() {
    this.myProperty = 'value';
}
```

### ES7
`myProperty = 'value'`

## Methods syntax

### ES6
myMethod(){....}

### ES7
myMethod = () => {...}

### Example of ES7 syntax

```js
class Human{
 
  gender ='Male';
  printGender = () => {
    console.log(this.gender); // this is required to refer to the class!
  }
}

class Person extends Human {
 
    name = 'Max';
    gender = 'Female';

    printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
```

Output:
>"Max" <br> "Female"