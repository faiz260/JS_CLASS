var fruit1 = "apple";
var fruit2 = "mango";
var fruit3 = "banana";
var fruit4 = "grapes";
var fruit5 = "orange";

// alert("Fruit: " + fruit4);

var fruits = ["apple", "mango", "banana", "orange", "grapes", "kiwi"];

// alert("Fruit: " + fruits[4]);
// console.log(fruits[5]);

var sports = [];

sports[0] = "cricket";
sports[1] = "football";
sports[2] = "badminton";
sports[3] = "basketball";

// console.log(sports[0], sports[1]);
// console.log(sports);

sports.pop();

sports.pop();

sports.push(6);

sports.push(true, "tennis", 7);

sports.shift();

sports.unshift(true, "foosball", 3);

sports.splice(1, 1);

sports.splice(2, 3);

sports.splice(0, 2, "cricket", "football", "hockey");

console.log(sports);

var sports2 = sports.slice(1, 4);

console.log(sports2);










