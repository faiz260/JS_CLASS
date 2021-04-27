var obj1 = {
  name: "faiz",
  age: 18,
};

// obj1.prototype.height = 5;

var checkName = "height" in obj1;
console.log(checkName);

var listOfProperties = [];

for (var prop in obj1) {
  if (obj1.hasOwnProperty(prop)) {
    listOfProperties.push(prop);
  }
}

console.log(listOfProperties);


var isOwnedProperty = obj1.hasOwnProperty("name");

console.log(isOwnedProperty);

