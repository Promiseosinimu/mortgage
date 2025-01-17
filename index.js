let mortgageAmount = document.getElementById("mortgage-amount") 
let mortgageTerm = document.getElementById("mortgage-term") 
let interestRate = document.getElementById("interest-rate") 
let interestOnly1 = document.getElementById("interest-only1")
let interestOnly2 = document.getElementById("interest-only2")
let amountAlert = document.getElementById("amount-alert")
let typeAlert = document.getElementById("type-alert")
let termAlert = document.getElementById("term-alert")
let rateAlert= document.getElementById("rate-alert")


function mortageCalculator() {
    let mortgageType = interestOnly1.checked ? interestOnly1.value : interestOnly2.value
    const object = {
        mortgage_type:mortgageType, 
        mortgage_amount:mortgageAmount.value,
        mortgage_Term:mortgageTerm.value,
        interest_rate:interestRate.value
    }

    const CHECKED = interestOnly1.checked || interestOnly2.checked


    if(CHECKED) {
        typeAlert.classList.remove('form-alert')
        typeAlert.classList.add('form-alert')
    } else {
        typeAlert.classList.remove('form-alert-show')
        typeAlert.classList.add('form-alert-show')
    }

    const mortgage__Amount = mortgageAmount.value <= 0
    if(mortgage__Amount) {
        amountAlert.classList.remove('form-alert-show')
        amountAlert.classList.add('form-alert-show')
    } else {
        amountAlert.classList.remove('form-alert')
        amountAlert.classList.add('form-alert')
    }

    const mortgage__Term = mortgageTerm.value <= 0
    if(mortgage__Term) {
        termAlert.classList.remove('form-alert-show')
        termAlert.classList.add('form-alert-show')
    } else {
        termAlert.classList.remove('form-alert')
        termAlert.classList.add('form-alert')
    }

    const interest__Rate = interestRate.value <= 0
    if(interest__Rate) {
        rateAlert.classList.remove('form-alert-show')
        rateAlert.classList.add('form-alert-show')
    } else {
        rateAlert.classList.remove('form-alert')
        rateAlert.classList.add('form-alert')
    }


 
/*    if(CHECKED) {
        amountAlert.classList.remove('form-alert')
        amountAlert.classList.add('form-alert-show')
    } else {
        amountAlert.classList.remove('form-alert-show')
        amountAlert.classList.add('form-alert')
    }
*/    


}