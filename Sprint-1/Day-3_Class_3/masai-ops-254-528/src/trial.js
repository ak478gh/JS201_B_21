// Expected to return: [3, 4, 5, 6, 7, 8, 9, 10]
function getRest() {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const [a,b, ...rest] = arr; // only change this line of code.
    return console.log(rest);
  }

  getRest();