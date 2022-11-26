
// Exercise: Create a factory function & a constructor function that creates a circle object, takes in radius, and gives us a method to print the area of the circle.

function circle(radius) {
    let obj = {
        radius:radius,
        area: function() {
            console.log(22/7*(radius**2));
        }
    }
    return obj;
}

// console.log(obj1);

function circle3(radius) {
    this.radius = radius;
    this.area = function() {
        console.log(22/7*(radius**2));
    }
}

let obj2 = new circle3(2);
obj2.area();
