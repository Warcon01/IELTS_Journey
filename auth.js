document.addEventListener('DOMContentLoaded', function () {
    const popupForm = document.getElementById('popup-form');
    const loginButton = document.getElementById('open-popup');
    const logoutButton = document.getElementById('logout');
    const closeButton = document.getElementById('close-popup');
    const toggleButton = document.getElementById('toggle-form');
    const formTitle = document.getElementById('form-title');
    const form = document.getElementById('auth-form');
    let isSignUp = false;

    function checkUserSession() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username) {
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
            alert(`Welcome back, ${user.username}!`);
        }
    }

    function openForm() {
        popupForm.style.display = 'flex';
        formTitle.textContent = isSignUp ? 'Sign Up' : 'Log In';
    }

    function closeForm() {
        popupForm.style.display = 'none';
    }

    function toggleForm() {
        isSignUp = !isSignUp;
        formTitle.textContent = isSignUp ? 'Sign Up' : 'Log In';
        toggleButton.textContent = isSignUp ? 'Switch to Log In' : 'Switch to Sign Up';
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;

        if (username) {
            if (isSignUp) {
                localStorage.setItem('user', JSON.stringify({ username }));
                alert(`Account created successfully! Welcome, ${username}!`);
            } else {
                const storedUser = JSON.parse(localStorage.getItem('user'));
                alert(`Welcome back, ${storedUser ? storedUser.username : username}!`);
            }
            closeForm();
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
        } else {
            alert('Please enter a valid username.');
        }
    }

    function logoutUser() {
        localStorage.removeItem('user');
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
        alert('You have been logged out.');
        location.reload();
    }

    loginButton.addEventListener('click', openForm);
    closeButton.addEventListener('click', closeForm);
    toggleButton.addEventListener('click', toggleForm);
    form.addEventListener('submit', handleFormSubmit);
    logoutButton.addEventListener('click', logoutUser);

    checkUserSession();
});
