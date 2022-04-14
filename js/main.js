//Product Amount Changer function
function increaseDecreaseProduct(valueYouWantToChange, incrementAmount) {
  const value = document.getElementById(valueYouWantToChange).value;
  const integerValue = parseInt(value);
  const updatedValue = integerValue + incrementAmount;
  document.getElementById(valueYouWantToChange).value = updatedValue;
}

//Price Changer Function

function increaseDecreaseHandler(valueYouWantToChange, incrementAmount) {
  const value = document.getElementById(valueYouWantToChange).innerText;
  const integerValue = parseInt(value);
  const updatedValue = integerValue + incrementAmount;
  document.getElementById(valueYouWantToChange).innerText = updatedValue;
}

const decreaseDevice = document.getElementById("decreaseDevice");
decreaseDevice.addEventListener("click", function () {
  increaseDecreaseProduct("deviceAmount", -1);
});
const increaseDevice = document.getElementById("increaseDevice");
increaseDevice.addEventListener("click", function () {
  increaseDecreaseProduct("deviceAmount", 1);
});
//Above incrementAmount will be in number such as -1 = decrease 1
// and 1 = increase value by 1
