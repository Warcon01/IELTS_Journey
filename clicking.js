document.addEventListener('DOMContentLoaded', function() {
    const clickSound = new Audio("click-sound.mp3");

    const formButtons = document.querySelectorAll('#contact-form button');

    formButtons.forEach(button => {
        button.addEventListener('click', function() {
            clickSound.play();
        });
    });
});