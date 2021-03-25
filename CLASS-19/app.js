// var body = document.childNodes[1].childNodes[2].childNodes[3];
// console.log("Node Type: ", body.nodeType);
// console.log(body);

// 1st method
// var d = document.getElementById("humpty");
// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//   if (d.childNodes[i].nodeType === 1) {
//     pCounter++;
//   }
//   if (pCounter === 2) {
//     d.childNodes[i].innerHTML = "All his men.";
//     console.log(d.childNodes[i].innerHTML);
//     break;
//   }
// }

// // 2nd  method
// var div = document.getElementById("div2");
// var par = div.getElementsByTagName("p");
// par[2].innerHTML = "All the kings horses";
// var text = par[2].innerHTML;
// console.log(text);

// // 3rd method
// var par = document.getElementsByTagName("p");
// par[1].innerHTML = "All the kings roses.";
// var text = par[1].innerHTML;
// console.log(text)

// 4th method
// var div = document.getElementById("div2").childNodes[3];
// div.innerHTML = "All the king's horses";
// console.log(div.innerHTML);

// // 5th method
// document.getElementById("para3").innerHTML = "All the king's horses";

console.log(document.getElementById("para3").nodeName);
