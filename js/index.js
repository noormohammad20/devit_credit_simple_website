function getInputValue(input) {
    const inputId = document.getElementById(input)
    const inputValue = parseInt(inputId.value)
    return inputValue;

}


document.getElementById('calculate-btn').addEventListener('click', function () {
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

