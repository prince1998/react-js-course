# Understanding Classes

Classes are blueprints for instantiating Javascript objects.

### Simple Example

constructor() function can be used to initialise an object of the class. constructor() functions are optional 

```js
class Person {

// The constructor method is a special method of a class for creating and initializing an object of that class.
  constructor() {
    this.name = 'Max'; // class property akin to variable
  }
  //class method akin to function
  printMyName(){ 
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();

```

Output <br>
> max 

### Classes can also use inheritance


```js
class Human{
  constructor(){
    this.gender = 'Male';
  }
  printGender(){
    console.log(this.gender);
  }
}

class Person extends Human {

  constructor(){
    super(); // we need to declare super to call parent class constructor
    this.name = 'Max'; 
  }
  printMyName(){
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender(); //now, we can access parent class function
```

Output <br>
> 'Max' <br> 'Male'