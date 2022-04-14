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

const iphonePriceFloat = textToFloat("iphonePrice");
const casePriceFloat = textToFloat("casePrice");

//Device Amount Decrease
const decreaseDevice = document.getElementById("decreaseDevice");
decreaseDevice.addEventListener("click", function () {
  increaseDecreaseProduct("deviceAmount", -1);
  increaseDecreasePrice("subTotalPrice", -1 * iphonePriceFloat);
});

//Device Amount Increase
const increaseDevice = document.getElementById("increaseDevice");
increaseDevice.addEventListener("click", function () {
  increaseDecreaseProduct("deviceAmount", 1);
  increaseDecreasePrice("subTotalPrice", iphonePriceFloat);
});

//Case Amount Decrease
const decreaseCase = document.getElementById("decreaseCase");
decreaseCase.addEventListener("click", function () {
  increaseDecreaseProduct("caseAmount", -1);
  increaseDecreasePrice("subTotalPrice", -1 * casePriceFloat);
});

//Case Amount Increase
const increaseCase = document.getElementById("increaseCase");
increaseCase.addEventListener("click", function () {
  increaseDecreaseProduct("caseAmount", 1);
  increaseDecreasePrice("subTotalPrice", casePriceFloat);
});
//Above incrementAmount will be in number such as -1 = decrease 1
// and 1 = increase value by 1
