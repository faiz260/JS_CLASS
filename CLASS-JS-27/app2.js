function validateEmail() {
  var eEntered = document.getElementById("email").value;
  var email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!eEntered.match(email_pattern)) {
    alert("Please correct email address");
    return false;
  }
}

function checkPassword() {
  try {
    var pass = document.getElementById("f1").value;
    if (pass.length < 8) {
      throw "Please enter at least 8 characters.";
    }
    if (pass.indexOf(" ") !== -1) {
      throw "No spaces in the password, please.";
    }
    var numberSomewhere = false;
    for (var i = 0; i < pass.length; i++) {
      if (isNaN(pass[i]) === false) {
        numberSomewhere = true;
        break;
      }
    }
    if (numberSomewhere === false) {
      throw "Include at least 1 number.";
    }
  } catch (err) {
    alert(err);
    return false;
  }
}
