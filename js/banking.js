/*
function doubleIt(num) {
    const result = num * 2;
    return result;
}

const first = doubleIt(5); //5*2=10
const second = doubleIt(7); //7*2=14
*/

function getInputValue() {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    //Clear input field
    depositeInput.value = '';
    return depositeAmount;

}


//  console.log();
//get deposite input Amount
document.getElementById('deposite-button').addEventListener('click', function () {
    /*  const depositeInput = document.getElementById('deposite-input');
     const depositeAmount = parseFloat(depositeInput.value); */

    //function call
    const depositeAmount = getInputValue();

    //get current deposite
    const depositeTotal = document.getElementById('deposite-amount');
    const preDepositeTotal = parseFloat(depositeTotal.innerText);

    //get updated deposite
    depositeTotal.innerText = preDepositeTotal + depositeAmount;

    //update Balance
    const balanceTotal = document.getElementById('balance-total');
    const preBalanceTotal = parseFloat(balanceTotal.innerText);

    //get updated Balance
    balanceTotal.innerText = depositeAmount + preBalanceTotal;



});

//handle Withdraw Amount
//get Withdraw input Amount
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);

    //get current Withdraw
    const withdrawTotal = document.getElementById('withdraw-amount');
    const preWithdrawTotal = parseFloat(withdrawTotal.innerText);

    //get updated Withdraw
    withdrawTotal.innerText = preWithdrawTotal + withdrawAmount;

    //get current Balance
    const balanceTotal = document.getElementById('balance-total');
    const preBalanceTotal = parseFloat(balanceTotal.innerText);

    //update Balance after Withdraw
    balanceTotal.innerText = preBalanceTotal - withdrawAmount;

    //Clear input field
    withdrawInput.value = '';
});

