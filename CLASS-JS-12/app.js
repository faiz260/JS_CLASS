function tellTime() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  console.log("time: " + theHr + ":" + theMin);
}

tellTime();

function userGreet(greetings, name){
    alert(greetings + " " + name);
}

userGreet("Welcome", "john");

function calcTot(merchTot) {
  var orderTot;
  if (merchTot >= 100) {
    orderTot = merchTot;
  } else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
  } else {
    orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
  }
  return orderTot ;
}

console.log(calcTot(80));

var total = calcTot(50);
total = total + 10;

console.log(total);

// Global Variables

var num1 = 2;

function variables(){
    num1 = num1 + 2;
    return num1;
}

console.log(variables());

// Local Variables

function variables(){
    var num1 = 2;
    console.log(num1)
}
variables()

console.log(num1);