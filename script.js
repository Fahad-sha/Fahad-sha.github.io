document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme, called on page load and on click
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    };

    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme);

    // Add click event listener to the button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-theme');
            if (isDark) {
                // Switch to light
                localStorage.setItem('theme', 'light');
                applyTheme('light');
            } else {
                // Switch to dark
                localStorage.setItem('theme', 'dark');
                applyTheme('dark');
            }
        });
    }

});
