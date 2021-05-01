function submitForm() {
  var inputField = document.getElementById("lastNameField");
  if (inputField.value === "") {
    alert("Enter your name");
    inputField.focus();
    return false;
  }
}

function checkForSelection(ID) {
  if (document.getElementById(ID).selectedIndex === 0) {
    alert("Please select a state.");
    return false;
  }
}

function validateRadios() {
  var radios = document.getElementsByName("r1");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  alert("Please check one.");
  return false;
}

function validateZip(ID) {
  var input = document.getElementById(ID).value;
  if (input.length !== 5) {
    alert("Invalid Zip Code!");
    return false;
  }
}

function validateEmail() {
  var eEntered = document.getElementById("email").value;
  if (eEntered.indexOf(" ") !== -1) {
    alert("No spaces allowed in address");
    return false;
  }
  if (
    eEntered.indexOf("@") < 1 ||
    eEntered.indexOf("@") > eEntered.length - 4
  ) {
    alert("Invalid email address");
    return false;
  }
  if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2) {
  }
}
