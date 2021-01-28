var input = prompt("Which city is the capital of Pakistan ?");
input = input.toLowerCase();

for(var i = 0; i < 1; i++){
    if(input === "islamabad"){
        alert("Correct!");
        break;
    }else{
        alert("Wrong!")
        break;
    }
}

var string = "abc";
console.log(string.toUpperCase());


var string = "ABC";
console.log(string.toLowerCase());