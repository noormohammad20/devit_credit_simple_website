function getInputValue(input) {
    const inputId = document.getElementById(input)
    // error handle 
    if (inputId.value < 0) {
        alert('please enter positive value')

    }
    else {
        const inputValue = parseInt(inputId.value)
        return inputValue;
    }
}

// calculate button function

document.getElementById('calculate-btn').addEventListener('click', function () {
    // get input value 
    const incomeInput = getInputValue('income-input')

    const foodInput = getInputValue('food-input')
    const rentInput = getInputValue('rent-input')
    const clothesInput = getInputValue('clothes-input')

    // calculation  and error handle
    if (incomeInput > 0 && foodInput > 0 && rentInput > 0 && clothesInput > 0) {
        const expenses = foodInput + rentInput + clothesInput
        if (expenses > incomeInput) {
            alert("you don't have enough money for expense")

        }
        else {
            document.getElementById('expense-amount').innerText = expenses

            const totalBalance = incomeInput - expenses;
            document.getElementById('balance-amount').innerText = totalBalance;
        }
    }
    document.getElementById('income-input').value = '';
    document.getElementById('food-input').value = '';
    document.getElementById('rent-input').value = '';
    document.getElementById('clothes-input').value = '';
})

// save button function

document.getElementById('save-btn').addEventListener('click', function () {
    // get input form declared function
    const incomeInput = getInputValue('income-input')
    const savingInput = getInputValue('saving-input')

    //   percentage calculation
    const savingTotal = (incomeInput * savingInput) / 100


    const balanceAmount = document.getElementById('balance-amount').innerText;

    // error handle 
    if (incomeInput > 0 && savingInput > 0) {
        if (savingTotal > balanceAmount) {
            alert("you don't have enough money")

        }

        else {
            document.getElementById('saving-amount').innerText = savingTotal;

            const balance = balanceAmount - savingTotal;
            document.getElementById('remaining-balance').innerText = balance;
        }
    }
    document.getElementById('saving-input').value = ''
})









