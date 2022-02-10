
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const depositAmount = parseFloat(inputAmountText);
  //clear
  inputField.value = "";
  return depositAmount;

}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {

    /* const depositInput = document.getElementById("deposit-input");
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText); */

    const depositAmount =getInputValue("deposit-input");

    //get current deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + depositAmount;

    //update balance

    const balanceUpdate = document.getElementById("balance-update");
    const balanceText = balanceUpdate.innerText;
    const balanceUpdateTotal = parseFloat(balanceText);
    balanceUpdate.innerText = balanceUpdateTotal + depositAmount;

    
  });

// ...........................withdraw balance.....................................................
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    /* const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText); */

    const withdrawAmount=getInputValue("withdraw-input");

    //withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

    //withdraw balance low
    //clear
    const balanceTotal = document.getElementById("balance-update");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalance - withdrawAmount;

    
  });
