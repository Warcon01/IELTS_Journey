function validateForm(event) {
    event.preventDefault();

    const name = document.forms["contact-form"]["name-form"].value;
    const surname = document.forms["contact-form"]["surname-form"].value;
    const email = document.forms["contact-form"]["email-form"].value;

    if (!name || !surname || !email) {
        event.preventDefault();
        alert("All fields must be filled out.")
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        return false;
    }

    event.target.submit();
}