function sayGoodBye() {
    console.log('good bye! ', this);
}

function sayHello() {
    console.log('Helloo! ', this);
    sayGoodBye();
}

sayHello();