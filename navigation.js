document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.navbar-nav .nav-link, #theme-toggle, #language-selector');
    let currentIndex = 0;

    function clearOutlines() {
        navItems.forEach(item => item.style.outline = '');
    }

    function focusNavItem(index) {
        if (index >= 0 && index < navItems.length) {
            clearOutlines();
            navItems[index].style.outline = '2px solid #007bff';
            navItems[index].focus();
        }
    }

    function handleDropdown(dropdownToggle) {
        const dropdownMenu = dropdownToggle.nextElementSibling;

        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
            dropdownToggle.click(); // Opens the dropdown
            const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
            let dropdownIndex = 0;

            dropdownItems[dropdownIndex].focus(); // Focus the first dropdown item

            function dropdownNavigation(event) {
                dropdownItems.forEach(item => item.style.outline = ''); // Clear outlines

                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    dropdownIndex = (dropdownIndex < dropdownItems.length - 1) ? dropdownIndex + 1 : 0;
                } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    dropdownIndex = (dropdownIndex > 0) ? dropdownIndex - 1 : dropdownItems.length - 1;
                } else if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    dropdownItems[dropdownIndex].click();
                } else if (event.key === 'Escape') {
                    dropdownToggle.click(); // Closes the dropdown
                    document.removeEventListener('keydown', dropdownNavigation);
                    focusNavItem(currentIndex); // Return focus to the toggle
                    return;
                }

                dropdownItems[dropdownIndex].style.outline = '2px solid #007bff'; // Add outline
                dropdownItems[dropdownIndex].focus();
            }

            document.addEventListener('keydown', dropdownNavigation);

            dropdownToggle.addEventListener('blur', () => {
                document.removeEventListener('keydown', dropdownNavigation);
                dropdownMenu.classList.remove('show');
            }, { once: true });
        }
    }

    focusNavItem(currentIndex);

    document.addEventListener('keydown', function (event) {
        const key = event.key;

        if (key === 'ArrowLeft' || key === 'ArrowRight') {
            event.preventDefault();
            clearOutlines();
            if (key === 'ArrowLeft') {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : navItems.length - 1;
            } else if (key === 'ArrowRight') {
                currentIndex = (currentIndex < navItems.length - 1) ? currentIndex + 1 : 0;
            }
            focusNavItem(currentIndex);
        }

        if (navItems[currentIndex].id === 'theme-toggle' && (key === 'Enter' || key === ' ')) {
            event.preventDefault();
            toggleTheme();
        }

        if (navItems[currentIndex].classList.contains('dropdown-toggle') && (key === 'Enter' || key === ' ')) {
            event.preventDefault();
            handleDropdown(navItems[currentIndex]);
        }
    });
});
