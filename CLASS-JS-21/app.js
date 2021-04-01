// var object1 = {
//     age: [20, 21],
//     name: "faiz",
//     fatherName: "shahnawaz khan",
//     contact: 534534
// };

// // delete object1.age;

// console.log(object1);

// propertyExists = "faiz" in object1;

// console.log(propertyExists);






var plan1 = {
  name: "basic",
  price: 4,
  discountedMonths: [4, 7, 8],

  calcAnnual: function (discountPercent) {
    var price = plan1.price;
    var date = new Date();
    var month = date.getMonth() + 1;
    for (var i = 0; i < plan1.discountedMonths.length; i++) {
      if (month === plan1.discountedMonths[i]) {
        price = price * discountPercent;
      }
    }
    return price * 12;
  },
};

console.log(plan1.calcAnnual(0.8))
