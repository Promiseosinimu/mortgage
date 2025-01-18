let mortgageAmountInputField = document.getElementById("mortgage-amount")
let mortgageTermInputField = document.getElementById("mortgage-term")
let interestRateInputField = document.getElementById("interest-rate")
let interestOnly1 = document.getElementById("interest-only1")
let interestOnly2 = document.getElementById("interest-only2")
let amountAlert = document.getElementById("amount-alert")
let typeAlert = document.getElementById("type-alert")
let termAlert = document.getElementById("term-alert")
let rateAlert= document.getElementById("rate-alert")

let parent1 = document.getElementById("mortgage-amount-main")
let parent2 = document.getElementById("form-symbol")

let parent3 = document.getElementById("form-symbol2")
let parent4 = document.getElementById("mortgage-term-main")

let parent5 = document.getElementById("form-symbol3")
let parent6 = document.getElementById("interest-rate-main")

const resultDiv = document.getElementById("result")

function formatNumber(number) {
    return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Integer ->

function mortgageCalculator() {
    const mortgageAmount = parseFloat(mortgageAmountInputField.value);
    const mortgageTerm = parseInt(mortgageTermInputField.value);
    const annualInterestRate = parseFloat(interestRateInputField.value) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = mortgageTerm * 12;

    let monthlyPayment;

    if (interestOnly1.checked) {
        monthlyPayment = mortgageAmount * monthlyInterestRate;
    } else {
        monthlyPayment = mortgageAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    }

    console.log('Monthly Payment:', monthlyPayment.toFixed(2));

    resultDiv.innerHTML = `$${formatNumber(monthlyPayment.toFixed(2))}`;

    const CHECKED = interestOnly1.checked || interestOnly2.checked


    if(CHECKED) {
        typeAlert.classList.remove('form-alert-show')
        typeAlert.classList.add('form-alert')
    } else {
        typeAlert.classList.remove('form-alert')
        typeAlert.classList.add('form-alert-show')
    }

    const mortgage__Amount = mortgageAmountInputField.value <= 0
    if(mortgage__Amount) {
        parent1.classList.remove('error-hide')
        parent1.classList.add('error-show')

        parent2.classList.remove('form-symbol')
        parent2.classList.add('form-symbol-error')

        amountAlert.classList.remove('form-alert-show')
        amountAlert.classList.add('form-alert-show')


    } else {
        mortgageAmountInputField.classList.remove('form-flex-error')
        mortgageAmountInputField.classList.add('form-flex-error')

        amountAlert.classList.remove('form-alert')
        amountAlert.classList.add('form-alert')

    }

    const mortgage__Term = mortgageTermInputField.value <= 0
    if(mortgage__Term) {
        parent4.classList.remove('error-hide')
        parent4.classList.add('error-show')

        parent3.classList.remove('form-symbol')
        parent3.classList.add('form-symbol-error')

        termAlert.classList.remove('form-alert-show')
        termAlert.classList.add('form-alert-show')
    } else {
        termAlert.classList.remove('form-alert')
        termAlert.classList.add('form-alert')
    }

    const interest__Rate = interestRateInputField.value <= 0
    if(interest__Rate) {
        parent6.classList.remove('error-hide')
        parent6.classList.add('error-show')

        parent5.classList.remove('form-symbol')
        parent5.classList.add('form-symbol-error')

        rateAlert.classList.remove('form-alert-show')
        rateAlert.classList.add('form-alert-show')
    } else {
        rateAlert.classList.remove('form-alert')
        rateAlert.classList.add('form-alert')
    }

}

function clearAll() {
    mortgageAmountInputField.value = ""
    mortgageTermInputField.value = ""
    interestRateInputField.value = ""

    parent1.classList.remove('error-show')
    parent1.classList.add('error-hide')

    parent2.classList.remove('form-symbol-error')
    parent2.classList.add('form-symbol')

    amountAlert.classList.remove('form-alert-show')
    amountAlert.classList.add('form-alert')

    parent6.classList.remove('error-show')
    parent6.classList.add('error-hide')

    parent5.classList.remove('form-symbol-error')
    parent5.classList.add('form-symbol')

    rateAlert.classList.remove('form-alert-show')
    rateAlert.classList.add('form-alert')

    parent4.classList.remove('error-show')
    parent4.classList.add('error-hide')

    parent3.classList.remove('form-symbol-error')
    parent3.classList.add('form-symbol')

    termAlert.classList.remove('form-alert-show')
    termAlert.classList.add('form-alert')

    typeAlert.classList.remove('form-alert-show')
    typeAlert.classList.add('form-alert')
}
