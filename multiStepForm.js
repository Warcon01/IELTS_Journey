document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('#next-step');
    const prevButtons = document.querySelectorAll('#prev-step');
    const submitButton = document.querySelector('button[type="submit"]');

    function showStep(step) {
        formSteps.forEach((stepElement, index) => {
            stepElement.classList.toggle('active', index === step);
        });
    }

    function validateStep(step) {
        const inputs = formSteps[step].querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value) {
                input.classList.add('invalid');
                isValid = false;
            } else {
                input.classList.remove('invalid');
            }
        });

        if (step === formSteps.length - 1) {
            const emailInput = document.querySelector('[name="email-form"]');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailInput.classList.add('invalid');
                alert("Please enter a valid email address.");
                isValid = false;
            } else {
                emailInput.classList.remove('invalid');
            }
        }

        return isValid;
    }

    nextButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                if (currentStep < formSteps.length - 1) {
                    currentStep++;
                    showStep(currentStep);
                }
            } else {
                alert('Please complete all required fields.');
            }
        });
    });

    prevButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (validateStep(currentStep)) {
            alert('Submission successful!');
        } else {
            alert('Please complete all required fields.');
        }
    });

    showStep(currentStep);
});
