

function checkPasswordsMatch(input) {
    let password = document.getElementById("password");
    let customPassword = document.getElementById("confirm-password");

    if (customPassword.value && customPassword.value != password.value) {
        customPassword.setCustomValidity("Passwords do not match.")
        password.setCustomValidity("Passwords do not match.")
    }
    
    else {
        customPassword.setCustomValidity("");
        password.setCustomValidity("")
    }
}
