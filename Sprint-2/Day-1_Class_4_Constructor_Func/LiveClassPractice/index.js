let obj = {
    name: 'Amit',
    sayHello: function () {
      console.log('Hello');
    }
  }

// console.log(obj)
let arr = ['Amit',5000, true]
// console.log(arr);

function myFunc() {
    return 'amit'
}
// console.log(myFunc());
// myFunc()

/*
console.log('myFunc.__proto__=== Function.prototype =>',myFunc.__proto__===Function.prototype);

console.log('arr.__proto__=== Array.prototype =>',arr.__proto__===Array.prototype);

console.log('Array.prototype.__proto__=== Object.prototype =>',Array.prototype.__proto__===Object.prototype);

console.log('obj.__proto__=== Object.prototype =>',obj.__proto__===Object.prototype)

console.log('Object.prototype.__proto__=== null =>',Object.prototype.__proto__===null)

*/

//---Creating our own Prototype chains---
// using Object.setPrototypeOf() 
let obj1 = {
    name:'AK',
    sayName: function() {
        console.log('My name is',this.name)
    }
}

let obj2 = {
    passoin:'Footballer'
}

Object.setPrototypeOf(obj2, obj1)
// console.log(obj2.name);
// obj2.sayName();
// console.log(obj2)

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

let obj3 = Object.create(obj1)

obj3.salary=50000;
obj3.sayName= function() {
    console.log('My name is',this.name)
}

// Object.setPrototypeOf(obj3, obj)

// obj3.sayName();
// console.log(obj3);

//===Chaining with functions prototype object===//

function a() {}
a.prototype.age = 24;

let b = {
    name:'AK'
}

Object.setPrototypeOf(b, a.prototype);

// console.log(b.__proto__===a.prototype); //true
// console.log(b);

// ===Improving our Factory function===//

// functions shared across all objects
const userFunctions = {
    sayName:function() {
        console.log("I'm", this.name)
    },
    sayAge:function() {
        console.log("my age", this.age);
    }
}
// factory Function
function userCreator(name) {
    let user = {}
    Object.setPrototypeOf(user, userFunctions)
    user.name = name
    return user;
}

const user1 = userCreator('pehla user')
// console.log(user1);
// console.log(user1.sayName());

const user2 = userCreator('dusra user')
// console.log(user2);
// console.log(user2.sayName());

// ===Implementing inheritance in Javascript using Factory functions and Object.setPrototypeOf()===//

const employeeFunction = {
    saySalary: function() {
        console.log(this.name+"'s salary is", this.salary);
    }
}

Object.setPrototypeOf(employeeFunction, userFunctions);

function employeeCreator(name, age, salary) {
    let employee = {}
    
    Object.setPrototypeOf(employee, employeeFunction);
    
    employee.name = name
    employee.age = age
    employee.salary = salary
    return employee;
}

const emp1 = employeeCreator('amit', 24, 70000);
console.log(emp1);
console.log(emp1.sayName());
console.log(emp1.sayAge());
console.log(emp1.saySalary());
console.log('emp1.__proto__=== employeeFunction',emp1.__proto__===employeeFunction);
console.log('employeeFunction.__proto__=== userFunctions',employeeFunction.__proto__=== userFunctions);

// ===Chaining Objects constructed via constructor functions?===//

let myFunc2 = function() {

}
console.log(obj);
console.log(myFunc2);