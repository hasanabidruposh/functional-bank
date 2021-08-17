/* function_1 for getting both 
deposite input & withdraw input Amount */

function getInputValue(inputId) {
    const userInput = document.getElementById(inputId);
    const userInputText = userInput.value;
    const userInputAmount = parseFloat(userInputText);
    //Clear input field
    userInput.value = '';
    return userInputAmount;

}

// function_2 for getting both total deposite and total withdraw 
function updateTotalField(totalFieldId, inputAmount) {
    // debugger;
    //get current deposite
    const totalField = document.getElementById(totalFieldId);
    const pretotal = parseFloat(totalField.innerText);
    //get updated deposite
    totalField.innerText = pretotal + inputAmount;
}

// function_3 for getting final balance
function updateBalance(inputAmount, isAdd) {
    //update Balance
    const balanceTotal = document.getElementById('balance-total');
    const preBalanceTotal = parseFloat(balanceTotal.innerText);

    if (isAdd == true) {
        //get updated Balance after deposite
        balanceTotal.innerText = inputAmount + preBalanceTotal;
    }
    else {
        //get updated Balance after withdraw
        balanceTotal.innerText = preBalanceTotal - inputAmount;
    }
}


////get deposite input Amount
document.getElementById('deposite-button').addEventListener('click', function () {

    //function_1 call for getting previous deposite 
    const depositeAmount = getInputValue('deposite-input');

    if (depositeAmount > 0) {
        //function_2 call for showing updated deposite
        updateTotalField('deposite-amount', depositeAmount);

        //function_3 call for showing updated Balance
        updateBalance(depositeAmount, true);
    }

});

//handle Withdraw Amount

////get Withdraw input Amount
document.getElementById('withdraw-button').addEventListener('click', function () {

    //function_1 call for getting previous withdraw
    const withdrawAmount = getInputValue('withdraw-input');

    //function_2 call for showing updated withdraw
    updateTotalField('withdraw-amount', withdrawAmount);

    //function_3 call for showing updated Balance
    updateBalance(withdrawAmount, false);
});

