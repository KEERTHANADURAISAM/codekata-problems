// JavaScript is designed on a simple object-based paradigm. An object is a collection of p roperties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.


// Numbers can be made object using the new keyword
// Boolean can be made object using the new keyword
// Strings can be made object using the new keyword
// An array is an object
// A function is an object
// Date is an object
// Regex (Regular Expression) is an object
// Maths is an object
// Objects are always objects


//object create syntax

// javascript object literal (commonly used)
// javascript Object.create method
// javascript object constructor
// object using class

// Among all ways to create objects in javascript, the most common way is the object literal.


// 1.obj litreal syntax

const objectCreate1 = {} 

let person = {
    // adding properties to an object
    firstName: "John",
    lastName : "Doe",
    age      : 50
  };
  // checking type
  console.log(typeof person); // o/p=  object

// my example
  let myObject ={
    name:"Keerthana",
    age:"24"
  }

  console.log(myObject)
// __________________________________________________________________________________________________________

// 2. Using Object.create method

// The Object.create() method is used to create an object from an existing object. It creates a new object with the same properties as the existing object.

// It uses an existing object as a prototype of the newly created object

// Object.create(object);

// prototype object
let myObjectExist ={
  name:"Keerthana",
  age:"24",
  mydetail:function details(){   //obj have inside a function its called method
return `my name is ${this.name} and age is ${this.age}`
  }
}
// create new obj
let newObj = Object.create(myObjectExist)
// change the value of the new object
newObj.name = "Ramya",
newObj.age =24

console.log(newObj.mydetail())

// _________________________________________________________________________________________________________
// 3.const objectCreate = new Object() obj constructor syntax

// The object constructor is a function that is used to create an object. 
// It is defined using the new keyword.
// If you want to create multiple objects of the same type then it is better to use the object constructor.

// Here are the steps to create an object using the object constructor:

// Create a Javascript function that will be used to create an object.
// The function should have a parameter that is the object properties.
// Now use the new keyword with the function to create an object.


function myData (name,age){
 this.name = name;
 this.age = age
}

const myFrndData = new myData("ram",24)
console.log(myFrndData)

const myNeighbourData = new myData("vishnu",20)
console.log(myNeighbourData)

// To add a method to an object, use the prototype property of the function.

// The prototype property is used to add methods to an object that is shared by all the objects created using the function.
const myParentData = new myData("Duraisamy",56)

myData.prototype.data =function () {
  return `my name is ${this.name} and age is ${this.age}`
}

console.log(myParentData.data())

//__________________________________________________________________________________________________________________

// 4. Javascript Object Using Class
// Class was introduced in ES6. It is a syntactical sugar for creating an object constructor.

// The class is used to create an object constructor. It is defined using the class keyword.

// There is difference between the class and the object constructor. All the difference is in their syntax.

// creating a class to create an object

class myFrndDetails{
  constructor(name,age){
this.name = name;
this.age  = age;
  }
   details(){
  return `my name is ${this.name} and age is ${this.age}`
}
}
const myFrndData1 = new myFrndDetails("sanjay",27)

console.log(myFrndData1.details())

//__________________________________________________________________________________________________________________

// Accessing properties of Object
// There are two ways to access the properties of an object.

// Using the dot operator.
// Using the bracket operator.
// 1. dot operator

// Using the dot operator, you can access the properties of an object by writing the object name followed by a dot and the property name.

// objectName.propertyName
// The dot operator is most commonly used to access the properties of an object.

const car ={
  color:"black",
  brand :"maruti",
  model:2015
}


console.log(car.model)

// 2. bracket operator
// Another way to access the properties of an object is using the bracket operator.

// objectName[propertyName]
// It accesses the properties of an object by writing the object name followed by the bracket and the property name as a string.

console.log(car["brand"])

//__________________________________________________________________________________________________________________

// Adding properties to an Object
// You can add a new property to an existing object simply by object name followed by a dot and the property name and assigning the value to the property.

car.brand = "mustang"
console.log(car.brand)

// Alternatively, you can use square bracket notation to add a new property to an object.


car['brand']= "mustang"
console.log(car.brand)
//_________________________________________________________________________________________________________________

// Deleting properties from an Object
// You can delete a property from an object by using the delete operator.


delete car.model
console.log(car.model)    // the o/p is undefined

// ____________________________________________________________________________________________________________________

// Looping through an Object
// Here we have discussed 4 different ways to loop through an object.

// 1. Using for...in loop
// The for...in loop access the properties of an object by iterating through the object.

const cars ={
  color:"black",
  brand :"maruti",
  model:2015
}

for(let key in cars){
  console.log(key,cars[key])
}
//___________________________________________________________________________________________________________________

// 2. Using Object.keys() loop
// The Object.keys() method returns an array of a given object's property names. Which can be used to loop through the object.

// looping through the object
for (let key of Object.keys(cars)) {
  console.log(key, cars[key]);
}
//___________________________________________________________________________________________________________________

// 3. Using Object.values() loop
// The Object.values() method returns an array of a given object's property values. Which gives us direct access to the values of the object.

for(let value of Object.values(cars)){
  console.log(value)
}

//_______________________________________________________________________________________________________________
// 4. Using Object.entries() loop
// The Object.entries() method returns an array of a given object's property names and values.

for(let entry of Object.entries(cars)){
  console.log(entry)
}
//_____________________________________________________________________________________________________________


// Javascript object Method
// object methods are the functions that are defined inside the object and operate on it to perform a certain task.

// object method is part of the object in the form of a key-value pair.

let Money = {
  earning: 12000,
  spent: 9000,
  remaining: function () {
      return this.earning - this.spent + " is remaining money.";
    }
}
// To access the object method write the method name followed by the object name connected with a dot.
let moneyManage = Money.remaining()
console.log(moneyManage)

//____________________________________________________________

// this keyword in an object represents the object itself. It is used to access the properties of the object. When you say this.propertyName it means object.propertyName.

// In the example below the sum is a method in 'number' object which is using this keyword to access properties of its parent element.

var number = {
  num1: 10,
  num2: 15,
  sum: function(){
    return this.num1 + this.num2
  }
}
console.log(number.sum());
