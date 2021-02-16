var today = new Date();
today.setFullYear(2000);
console.log(today)

 
var monthNow = today.getMonth();
var months = ["jan", "feb", "march", "april", "may", "june", "july", "august"];
var nameOfMonth = months[monthNow]

console.log(nameOfMonth);

var dateOfMonth = today.getDate();
console.log(dateOfMonth);

var yearNow = today.getFullYear();
console.log(yearNow);

console.log(dateOfMonth + "th " + nameOfMonth + " " + yearNow);

var TimeNow = today.getHours();
console.log("24 hours format >> " , TimeNow);

if(TimeNow => 13 && TimeNow <= 23){
    TimeNow = 12 - TimeNow;
}
console.log("12 hours format >> " , TimeNow);
