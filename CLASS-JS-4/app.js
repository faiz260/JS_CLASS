
// if(x === 5){
//     console.log("Hello World");
// }
// if(x !== 5){
//     console.log("Bye World")
// }

var age = prompt("Enter Your Age: ");
var height = prompt("Enter your height: ");
var nationality = prompt("Enter your nationality: ");

if (age == 18) {
  if (nationality === "pakistan") {
    alert("You are eligible");
  } else if (height == 6) {
    alert("You are eligible");
  } else {
    alert("You are not eligible");
  }
} else{
    alert("You are not eligible")
}

// if(age == 18 || (height == 6 && nationality == "pakistan")){
//     alert("You are eligible");
// } else{
//     alert("You are not eligible");
// }

// if(age == 18 && height == 6 && nationality == "pakistan"){
//     alert("You are eligible");
// } else{
//     alert("You are not eligible")
// }

// true + true = true;
// false + false = true;
// true + false = false;
// false + true = false;

// if (age >= 18) {
//   alert("You are eligible");
// } else if(age >= 23) {
//   alert("You over aged");
// } else if(age < 18){
//     alert("You are under aged");
// } else{
//     alert("Invalid Input")
// }
