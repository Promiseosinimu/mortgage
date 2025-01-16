let mortgageAmount = document.getElementById("mortgage-amount") 
let mortgageTerm = document.getElementById("mortgage-term") 
let interestRate = document.getElementById("interest-rate") 
let interestOnly1 = document.getElementById("interest-only1")
let interestOnly2 = document.getElementById("interest-only2")
let amountAlert = document.getElementById("amount-alert")
let typeAlert = document.getElementById("type-alert")

function mortageCalculator() {
    let mortgageType = interestOnly1.checked ? interestOnly1.value : interestOnly2.value
    const object = {
        mortgage_type:mortgageType, 
        mortgage_amount:mortgageAmount.value,
        mortgage_Term:mortgageTerm.value,
        interest_rate:interestRate.value
    }

    const CHECKED = !interestOnly1.checked || !interestOnly2.checked
    
    if(CHECKED) {
        typeAlert.classList.remove('form-alert')
        typeAlert.classList.add('form-alert-show')
    } else {
        typeAlert.classList.remove('form-alert-show')
        typeAlert.classList.add('form-alert')
    }
    if(CHECKED) {
        amountAlert.classList.remove('form-alert')
        amountAlert.classList.add('form-alert-show')
    } else {
        amountAlert.classList.remove('form-alert-show')
        amountAlert.classList.add('form-alert')
    }
}