function getInputValue(input) {
    const inputId = document.getElementById(input)
    const inputValue = parseInt(inputId.value)
    return inputValue;

}

function getInnerText(innerText) {
    const innerTextId = document.getElementById(innerText)
    const innerTextValue = Number(innerTextId.innerText)
    return innerTextValue
}



document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = getInputValue('income-input')

    const foodInput = getInputValue('food-input')
    const rentInput = getInputValue('rent-input')
    const clothesInput = getInputValue('clothes-input')

    const expenses = foodInput + rentInput + clothesInput;

    const balance = incomeInput - expenses



})