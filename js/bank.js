function getInputValue() {
  const depositInput = document.getElementById("deposit-input");
  const depositText = depositInput.value;
  const depositAmount = parseFloat(depositText);
  //clear
  depositInput.value = "";
  return depositAmount;

}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);

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
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);
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

    //clear
    withdrawInput.value = "";
  });
