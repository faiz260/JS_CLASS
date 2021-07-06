let array1 = ["a", "b", "c", "d", "a", "b", "c", "d"];

// For In Loop
// It is used for traversing

// for (let i in array1) {
//     console.log(array1[i]);
// }

// For of loop

// let array2 = ["a", "b", "c", "d", "a", "b", "c", "d"];

// for (let x of array2){
//     console.log(x + " + b");
// }

// forEach loop

// let array3 = [1, 2, 3, 4, 5];
// let sum = 0;

// const function1 = (item, index, arr) => {
//   arr[index] = item * item;
// };

// const function2 = (item) => {
//   // for individual item
//   sum += item;
// };

// array3.forEach(function1);
// array3.forEach(function2);

// console.log(array3);
// console.log(sum);

// map

// const arr = [
//   {
//     name: "faiz",
//     age: 20,
//     profession: "web-developer",
//   },
//   {
//     name: "hasan",
//     age: 21,
//     profession: "back-end-developer",
//   },
// ];

// arr.map((item) => {
//   console.log(item);
// });


// Destructuring

const obj1 = {
  name: "faiz",
  age: 20,
  profession: "web-developer",
};

const {name, age, profession} = obj1; 

console.log(profession);

