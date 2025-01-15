const defaultText = document.getElementById("default-text")
const calculatorcontainer = document.getElementById("calculator-container")

document.querySelectorAll(".mortgage-type").forEach(input => {
    input.addEventLIstener('change', () => {
        document.querySelectorAll('.radio-inputs').forEach[div => {
            div.classlist.remove('selected')
        }]

        if (this.checked) {
            this.parentElement.classList.add('selected')
        }
    })
})

document.getElementById("calculator-btn").addEventListener("click", () => {
    const amount = perseFloat(document.getElementById("mortgage-amount").value)
    const term = perseFloat(document.getElementById("mortgage-term").value)
    const rate = perseFloat(document.getElementById("mortgage-rate").value)
    const mortgageType = document.querySelector("input[name='mortgage-type]:checked")
})

let isValid = true

document.querySelectorAll('.form-flex').forEach( el => {
    el.classlist.remove['error']
})

if(isNaN(amount) || amount <= o) {
    document.getElementById('amount-alert').style.display = 'block'
    document.getElementById('mortgage-amount-main').classList.add('error')
    isValid = false
} else {
    document.getElementById('amount-alert').style.display = 'none'
}

if(isNaN(term) || term <= 0) {
    document.getElementById('term-alert').style.display = 'block'
    document.getElementById('mortgage-term-main').classList.add('error')
    isValid = false
} else {
    document.getElementById('term-alert').style.display = 'none'
} 

if(isNaN(rate) || rate <= 0) {
    document.getElementById('rate-alert').style.display = 'block'
    document.getElementById('mortgage-rate-main').classList.add('error')
    isValid = false
} else {
    document.getElementById('rate-alert').style.display = 'none'
}

