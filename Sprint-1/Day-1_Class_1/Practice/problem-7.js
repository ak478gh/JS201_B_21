let x = (1 && 2) ?? 3;
console.log(x);

let x2 = (1 && null) ?? 3;
console.log(x2);

let x3 = (1 && undefined) ?? 3;
console.log(x3);