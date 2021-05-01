var whereWeAt = window.location.hash;

console.log(whereWeAt);

// var monkeyWindow = window.open("https://www.google.com");

// var windowContent =
//   "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent);

// monkeyWindow.close();

// var monkeyWindow = window.open("index.html", "win1", "width=420,height=380");

function checkForPopBlocker() {
  var testPop = window.open("index.html", "", "width=100,height=100");
  if (testPop === null || typeof(testPop === "undefined")) {
    alert("Please disable your popup blocker.");
  }
  testPop.close();
}
