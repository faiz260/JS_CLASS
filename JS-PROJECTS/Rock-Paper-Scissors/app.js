var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var compare = function (choice1, choice2) {
  //   if (choice1 === "paper") {
  //     if (choice2 === "rock") {
  //       return "paper wins";
  //       console.log("paper wins");
  //     } else {
  //       if (choice2 === "scissors") {
  //         return "scissors wins";
  //         console.log("scissors wins");
  //       }
  //     }
  //     if (choice1 === "scissors") {
  //       if (choice2 === "rock") {
  //         return "rock wins";
  //         console.log("rock wins");
  //       } else {
  //         if (choice2 === "paper") {
  //           return "scissors wins";
  //           console.log("scissors wins");
  //         }
  //       }
  //     }
  //   }
  if (choice1 == "rock" || choice2 == "paper") {
    return "Paper wins";
  } else if (choice2 == "scissors") {
    return "Rock wins";
  }
  if (choice1 == "paper" || choice2 == "scissors") {
    return "Scissors wins";
  } else if (choice2 == "rock") {
    return "Paper wins";
  }
  if (choice1 == "rock" || choice2 == "scissors") {
    return "Rock wins";
  } else if (choice2 == "paper") {
    return "Paper wins";
  }
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
console.log(compare(userChoice, computerChoice));
