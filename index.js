const form = document.getElementById("form")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const btn = document.getElementById("btn")
const formMsg = document.getElementById("formMsg")
const r1 = document.getElementById("r1")
const r2 = document.getElementById("r2")
const r3 = document.getElementById("r3")
const r4 = document.getElementById("r4")


// email validation process
function checkEmail() {
    let emailValue = emailInput.ariaValueMax.trim()

    if (emailValue === "") {
        emailError.textContent = "Email is required"
        emailInput.className = "invalid"
        return false

    }
}


