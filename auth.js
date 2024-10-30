document.addEventListener('DOMContentLoaded', function() {
    const popupForm = document.getElementById('popup-form');
    const loginButton = document.getElementById('open-popup');
    const logoutButton = document.getElementById('logout');
    const closeButton = document.getElementById('close-popup');

    function checkUserSession() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username) {
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
            alert(`Welcome back, ${user.username}!`);
        }
    }

    function openLoginForm() {
        popupForm.style.display = 'flex';
    }

    function closeForm() {
        popupForm.style.display = 'none';
    }

    function submitLoginForm(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            localStorage.setItem('user', JSON.stringify({ username }));
            closeForm();
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
            alert(`Welcome, ${username}!`);
        } else {
            alert('Please enter valid credentials.');
        }
    }

    function logoutUser() {
        localStorage.removeItem('user');
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
        alert('You have been logged out.');
        location.reload();
    }

    loginButton.addEventListener('click', openLoginForm);
    closeButton.addEventListener('click', closeForm);
    window.submitLoginForm = submitLoginForm;
    window.logoutUser = logoutUser;

    checkUserSession();
});
