// #1 grouping related variables
let account = {
    name: 'Vivek',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
  }

  account.referance = 'someone'
  account['some+key'] = 'another one'
  delete account['some+key']

//   console.log(account);

// #2 passing into a function as an Argument
function someFunc(obj) {
    console.log('name:',obj.name, 'type:',obj.type)
}

// someFunc(account)

// #3 Related functions can be a part of the object itself, so wherever we have this object we have access to its functions (methods). In other words, Objects can store functions with their associated data.

let account2 = {
    name: 'Amit',
    type: 'Saving',
    balance: 4200,
    details: function() {
        console.log('name:', this.name,'\n', 'type:', this.type,'\n', 'balance:',this.balance)
    }
}

// console.log(account2.details())

// #4 Factory functions

function facFunc(accountName, accountType, accountBalance) {
    let obj = {
        name: accountName,
        type: accountType,
        balance: accountBalance,
        print: function() {
            console.log('name:', this.name,'\n', 'type:', this.type,'\n', 'balance:',this.balance)
        }
    }
    return obj
}

let acc1 = facFunc('Amit', 'Saving', 6500);
// acc1.print();

let acc2 = facFunc('Sumit', 'Current', 10000);
// acc2.print();

// #5 Constructor Function (new keyword)

function ConstructorFunc(name, type, balance) {
    
    this.name = name,
    this.type = type,
    this.balance = balance,
    this.print = function() {
        console.log('Name:', this.name,'\n',  'Type:',this.type,'\n',  'Balance:',this.balance,)
    }
}

const constructorObj1 = new ConstructorFunc('Amit', 'Saving', 50000);
// constructorObj1.print();
var constructorObj2 = new ConstructorFunc('Sumit', 'Saving', 5000000)
// constructorObj2.print();

// Exercise: Create a factory function & a constructor function that creates a circle object, takes in radius, and gives us a method to print the area of the circle.

function facFunc_circle(radius) {
    let circleObj = {
        radius: radius,
        area: function() {
            console.log(22/7*(radius**2))
        }
    }
    return circleObj;
}

circle1 = facFunc_circle(2)
// circle1.area()

function ConstructorFunc_circle(radius) {
    this.radius = radius,
    this.area = function() {
        console.log(22/7*radius**2)
    }
}

let circle2 = new ConstructorFunc_circle(2);
// circle2.area()