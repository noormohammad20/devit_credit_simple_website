function getInputValue(input) {
    const inputId = document.getElementById(input)
    if (inputId.value < 0) {
        alert('please enter positive value')

    }
    else {
        const inputValue = parseInt(inputId.value)
        return inputValue;
    }

}


document.getElementById('calculate-btn').addEventListener('click', function () {
    // get input value 
    const incomeInput = getInputValue('income-input')

    const foodInput = getInputValue('food-input')
    const rentInput = getInputValue('rent-input')
    const clothesInput = getInputValue('clothes-input')

    // calculation 

    const expenses = foodInput + rentInput + clothesInput;
    document.getElementById('expense-amount').innerText = expenses

    const totalBalance = incomeInput - expenses;
    document.getElementById('balance-amount').innerText = totalBalance;
})

document.getElementById('save-btn').addEventListener('click', function () {

    const incomeInput = getInputValue('income-input')
    const savingInput = getInputValue('saving-input')


    const savingTotal = (incomeInput * savingInput) / 100

    const savingAmount = document.getElementById('saving-amount').innerText = savingTotal;

    const balanceAmount = document.getElementById('balance-amount').innerText;



    const balance = balanceAmount - savingAmount;
    document.getElementById('remaining-balance').innerText = balance;



})
