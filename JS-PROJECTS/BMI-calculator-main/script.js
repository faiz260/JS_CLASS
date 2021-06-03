const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("results");

  if (height === "" || height < 0 || isNaN(height)) {
    //NaN !== NaN
    results.innerHTML = "Please provide a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please provide a valid weight";
  } else {
    //calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //display the results
    results.innerHTML = bmi;
  }
});

//notes
//NaN !== NaN, use the isNaN() function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
