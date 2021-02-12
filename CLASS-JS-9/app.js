var text = "The New York magzine does not allow the word The World War II. The newyork magzine";
console.log("Original text >>",text);

// 3rd METHOD

text = text.replace("World War II", "Second World War");

console.log(text);

// 2nd METHOD

// var index = text.indexOf("World War II");
// if(index !== -1){
//      text = text.slice(0, index) + "Second World War" + text.slice(index + 12);    
// }

// console.log(text)

// 1st METHOD

// for(var i = 0; i < text.length; i++){
//     if(text.slice(i, i + 12) === "World War II"){
//         text = text.slice(0, i) + "Second World War" + text.slice(i + 12);    
//     }
// }

// console.log("Sliced text >>",text);



// var firstChar = text.charAt(0);

// for(var i = 0; text.length; i++){
//     if(text.charAt(i) === "."){
//         console.log("I FOUND IT !!!");
//         break;
//     }
// }

// console.log(firstChar);