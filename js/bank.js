function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const depositAmount = parseFloat(inputAmountText);
  //clear
  inputField.value = "";
  return depositAmount;
}
function updateTotalField(totalFieldId, amount) {
  // debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousText = parseFloat(totalText);
  totalElement.innerText = previousText + amount;
}

function updateBalance(amount, isAdd) {
  const balanceUpdate = document.getElementById("balance-update");
  const balanceText = balanceUpdate.innerText;
  const balanceUpdateTotal = parseFloat(balanceText);
  if (isAdd == true) {
    balanceUpdate.innerText = balanceUpdateTotal + amount;
  } else {
    balanceUpdate.innerText = balanceUpdateTotal - amount;
  }
}

//......................................old code......................................
document.getElementById("deposit-button").addEventListener("click", function () {
    /* const depositInput = document.getElementById("deposit-input");
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText); */

    const depositAmount = getInputValue("deposit-input");

    //get current deposit
    /* const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositAmount; */

    updateTotalField("deposit-total", depositAmount);

    //update balance

    /* const balanceUpdate = document.getElementById("balance-update");
    const balanceText = balanceUpdate.innerText;
    const balanceUpdateTotal = parseFloat(balanceText);
    balanceUpdate.innerText = balanceUpdateTotal + depositAmount; */

    updateBalance(depositAmount, true);
  });

// ...........................withdraw balance.....................................................
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    /* const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText); */

    const withdrawAmount = getInputValue("withdraw-input");

    //withdraw total

    /* const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount; */

    updateTotalField("withdraw-total", withdrawAmount);

    //withdraw balance low
    //clear
    /* const balanceTotal = document.getElementById("balance-update");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance - withdrawAmount; */

    updateBalance(withdrawAmount, false);
  });
