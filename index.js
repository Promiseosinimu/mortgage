let mortgageAmount = document.getElementById("mortgage-amount") 
let mortgageTerm = document.getElementById("mortgage-term") 
let interestRate = document.getElementById("interest-rate") 
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


function mortgageCalculator() {
    let mortgageType = interestOnly1.checked ? interestOnly1.value : interestOnly2.value
    const object = {
        mortgage_type:mortgageType, 
        mortgage_amount:mortgageAmount.value,
        mortgage_Term:mortgageTerm.value,
        interest_rate:interestRate.value
    }

    const CHECKED = interestOnly1.checked || interestOnly2.checked


    if(CHECKED) {
        typeAlert.classList.remove('form-alert-show')
        typeAlert.classList.add('form-alert')
    } else {
        typeAlert.classList.remove('form-alert')
        typeAlert.classList.add('form-alert-show')
    }

    const mortgage__Amount = mortgageAmount.value <= 0
    if(mortgage__Amount) {
        parent1.classList.remove('error-hide')
        parent1.classList.add('error-show')

        parent2.classList.remove('form-symbol')
        parent2.classList.add('form-symbol-error')

        amountAlert.classList.remove('form-alert-show')
        amountAlert.classList.add('form-alert-show')


    } else {
        mortgageAmount.classList.remove('form-flex-error')
        mortgageAmount.classList.add('form-flex-error')

        amountAlert.classList.remove('form-alert')
        amountAlert.classList.add('form-alert')

    }

    const mortgage__Term = mortgageTerm.value <= 0
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

    const interest__Rate = interestRate.value <= 0
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
    mortgageAmount.value = ""
    mortgageTerm.value = ""
    interestRate.value = ""

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