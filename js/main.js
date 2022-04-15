//Product Amount Changer function
function increaseDecreaseProduct(valueYouWantToChange, incrementAmount) {
  const value = document.getElementById(valueYouWantToChange).value;
  const integerValue = parseInt(value);
  const updatedValue = integerValue + incrementAmount;
  document.getElementById(valueYouWantToChange).value = updatedValue;
}

//Price Changer Function

function increaseDecreasePrice(valueYouWantToChange, incrementAmount) {
  const value = document.getElementById(valueYouWantToChange).innerText;
  const integerValue = parseInt(value);
  const updatedValue = integerValue + incrementAmount;
  document.getElementById(valueYouWantToChange).innerText = updatedValue;
}

//Make Text into float
function textToFloat(textId) {
  var textPrice = document.getElementById(textId).innerText;
  const floatedPrice = parseFloat(textPrice);
  return floatedPrice;
}

//Tax calculator
function calculateTaxForTotalPrice() {
  const totalPriceWithTax =
    (taxAmountFloat / 100) * textToFloat("subTotalPrice") +
    textToFloat("subTotalPrice");
  document.getElementById("totalPrice").innerHTML = totalPriceWithTax;
}

const iphonePriceFloat = textToFloat("iphonePrice");
const casePriceFloat = textToFloat("casePrice");
const totalPriceFloat = textToFloat("totalPrice");
const taxAmountFloat = textToFloat("taxAmount");
const subtotalPrice = textToFloat("subTotalPrice");

//Device Amount Decrease
const decreaseDevice = document.getElementById("decreaseDevice");
decreaseDevice.addEventListener("click", function () {
  increaseDecreaseProduct("deviceAmount", -1);
  increaseDecreasePrice("subTotalPrice", -1 * iphonePriceFloat);
  calculateTaxForTotalPrice();
});

//Device Amount Increase
const increaseDevice = document.getElementById("increaseDevice");
increaseDevice.addEventListener("click", function () {
  increaseDecreaseProduct("deviceAmount", 1);
  increaseDecreasePrice("subTotalPrice", iphonePriceFloat);
  calculateTaxForTotalPrice();
});

//Case Amount Decrease
const decreaseCase = document.getElementById("decreaseCase");
decreaseCase.addEventListener("click", function () {
  increaseDecreaseProduct("caseAmount", -1);
  increaseDecreasePrice("subTotalPrice", -1 * casePriceFloat);
  calculateTaxForTotalPrice();
});

//Case Amount Increase
const increaseCase = document.getElementById("increaseCase");
increaseCase.addEventListener("click", function () {
  increaseDecreaseProduct("caseAmount", 1);
  increaseDecreasePrice("subTotalPrice", casePriceFloat);
  calculateTaxForTotalPrice();
});
//Above incrementAmount will be in number such as -1 = decrease 1
// and 1 = increase value by 1
