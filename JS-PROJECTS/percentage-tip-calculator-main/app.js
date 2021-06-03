var billAmountInput = document.getElementById("bill-amount");
var taxPercentageInput = document.getElementById("tax-percentage");
var total = document.getElementById("total");
var calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
  billAmount = Number(billAmountInput.value);
  taxPercent = Number(taxPercentageInput.value);

  if (
    isNaN(billAmount) ||
    isNaN(taxPercent) ||
    billAmount == null ||
    taxPercent == null
  ) {
    alert("Please Enter a valid input");
  }

  var taxAmount = (billAmount / 100) * taxPercent;
  var totalBill = taxAmount + billAmount;

  total.value = "$" + totalBill;

  console.log(billAmount + taxPercent);
});
