var nums = [1, 2];

// for(var i = 0; i < 2; i++){
//     if(nums[i] !== nums[i]){
//         flag = true;
//         alert(nums[i]);
//     }
// }

// if(flag === false){
//     alert("Not equal");
// }

// var cities = ["karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];

// var capital = prompt("Which city is the capital of Pakistan? ");

// var arrayLength = cities.length;
// console.log(arrayLength);

// var flag = false;

// for(var i = 0; i < arrayLength; i++){
//     if(capital === "Islamabad"){
//         flag = true;
//         alert("You're answer is correct!");
//         break;
//     }
// }

// if(flag === false){
//     alert("Wrong Answer!!!!");
// }




// Nested Loops

var firstNames = ['faiz', 'sameer', 'shayan'];
var lastName = [' khan', ' raza', ' malik'];
var fullNames = [];

console.log("Full Names >>>> ",fullNames);

'faiz khan, sameer khan, shayan khan'

for(var i = 0; i < firstNames.length; i++){
    for(var j = 0; j < lastName.length; j++){
        fullNames.push(firstNames[i] + lastName[j]);
    }
}

console.log("Full Names >>>> ",fullNames);