// array

const myArr = [0,1,2,3,4,5]
const myHero = ["shaktiman","nagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myHero[1],myArr[3]);

// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop() //removes last value

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr);


// +++++++++ slice , splice +++++++++

// Slice
console.log("A", myArr)
const myn1 = myArr.slice(1,5)

console.log(myn1);
console.log("B",myArr);

// Splice 

const myn2 = myArr.splice(1,5)
console.log("C",myArr);
console.log(myn2);
