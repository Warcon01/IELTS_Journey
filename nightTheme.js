document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'night') {
        document.body.classList.add('night-theme');
        document.getElementById('theme-toggle').innerText = 'Switch to Day Mode';
    }
});

function toggleTheme() {
    document.body.classList.toggle('night-theme');
    const theme = document.body.classList.contains('night-theme') ? 'night' : 'day';
    localStorage.setItem('theme', theme);
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.innerText = theme === 'night' ? 'Switch to Day Mode' : 'Switch to Night Mode';
}