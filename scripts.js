function isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.newsletter form');
    const messageDiv = document.querySelector('.newsletter .message');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let emailInput = document.getElementById('email');
        let email = emailInput.value.trim();
        
        if (isEmail(email)) {
            messageDiv.innerHTML = "<p>Thank you! Your email address '" + email + "' has been added to our mailing list!</p>";
            emailInput.value = '';
        } else {
            messageDiv.innerHTML = "<p>Please enter a valid email address.</p>";
        }
    });
});