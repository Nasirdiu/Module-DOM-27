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

function getCurrentBalance() {
  const balanceUpdate = document.getElementById("balance-update");
  const balanceText = balanceUpdate.innerText;
  const balanceUpdateTotal = parseFloat(balanceText);
  return balanceUpdateTotal;
}

function updateBalance(amount, isAdd) {
  const balanceUpdate = document.getElementById("balance-update");
  /* 
  const balanceText = balanceUpdate.innerText;
  const balanceUpdateTotal = parseFloat(balanceText); */

  const balanceUpdateTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceUpdate.innerText = balanceUpdateTotal + amount;
  } else {
    balanceUpdate.innerText = balanceUpdateTotal - amount;
  }
}

//......................................old code......................................
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    /* const depositInput = document.getElementById("deposit-input");
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText); */

    //get current deposit
    /* const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositAmount; */

    //update balance

    /* const balanceUpdate = document.getElementById("balance-update");
    const balanceText = balanceUpdate.innerText;
    const balanceUpdateTotal = parseFloat(balanceText);
    balanceUpdate.innerText = balanceUpdateTotal + depositAmount; */
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    } else {
      alert("আমার ব্যাংক এ নেগেটিভ টাকা জমা হয় না ");
    }
  });

// ...........................withdraw balance.....................................................
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    /* const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText); */

    //withdraw total

    /* const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount; */

    //withdraw balance low
    //clear
    /* const balanceTotal = document.getElementById("balance-update");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance - withdrawAmount; */

    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      updateTotalField("withdraw-total", withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
      alert("তোমার ব্যালেন্স এ টাকা নাই");
    }
  });
  // logout option
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "index.html";
});
