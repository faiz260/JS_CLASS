// Reading/Getting field values
function checkEmail(fieldId) {
  var value = document.getElementById(fieldId).value;
  if (value === "") {
    alert("Email is required !!");
  } else {
    alert("Thank you for submitting your response!");
    alert("Your response is: " + value);
  }
}

// Setting field values

function setEmail(fieldId) {
  document.getElementById(fieldId).value = "raza@gmail.com";
}

// Reading and setting paragraph text

function expandLoris() {
  var expandedParagraph =
    "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals";
  document.getElementById("slowLoris").innerHTML = expandedParagraph;
}
