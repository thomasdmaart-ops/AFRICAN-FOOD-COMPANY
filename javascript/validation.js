

console.log("validation.js loaded and executing...");

document.addEventListener('DOMContentLoaded', () => {
    const inquiryForm = document.querySelector('.inquiry-form');
    
    if (!inquiryForm) {
        console.warn("Target form '.inquiry-form' not found on this page.");
        return;
    }

    const nameInput = inquiryForm.querySelector('input[type="text"]');
    const emailInput = inquiryForm.querySelector('input[type="email"]');
    const phoneInput = inquiryForm.querySelector('input[type="tel"]');
    const messageInput = inquiryForm.querySelector('textarea');

    inquiryForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop default form submission

        clearErrors(inquiryForm);
        let isValid = true;

        // 1. Validate Full Name
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            showError(nameInput, 'Please enter a valid full name.');
            isValid = false;
        }

        // 2. Validate Email Address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address (e.g., name@example.co.za).');
            isValid = false;
        }

        // 3. Validate Phone Number
        const cleanPhone = phoneInput.value.trim().replace(/\s/g, '');
        if (cleanPhone.length < 10) {
            showError(phoneInput, 'Please enter a valid contact phone number (e.g., 082 123 4567).');
            isValid = false;
        }

        // 4. Validate Message
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            showError(messageInput, 'Message must be at least 10 characters long.');
            isValid = false;
        }

        // If all checks pass
        if (isValid) {
            alert('Inquiry successfully validated and submitted! Our customer care team will respond within 24 hours.');
            inquiryForm.reset();
        }
    });
});

function showError(inputElement, message) {
    inputElement.style.borderColor = '#d9534f';
    let errorSpan = inputElement.parentNode.querySelector('.error-msg');
    if (!errorSpan) {
        errorSpan = document.createElement('small');
        errorSpan.className = 'error-msg';
        errorSpan.style.color = '#d9534f';
        errorSpan.style.marginTop = '5px';
        errorSpan.style.display = 'block';
        inputElement.parentNode.appendChild(errorSpan);
    }
    errorSpan.innerText = message;
}

function clearErrors(formElement) {
    const inputs = formElement.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.style.borderColor = '#ddd';
    });
    const errorMsgs = formElement.querySelectorAll('.error-msg');
    errorMsgs.forEach(msg => msg.remove());
}