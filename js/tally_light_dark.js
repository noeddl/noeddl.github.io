document.addEventListener('DOMContentLoaded', function () {
    const tallyIframe = document.getElementById('tally-contact-form');

    // Get form URLs from data attributes
    const lightThemeFormUrl = tallyIframe.getAttribute('data-light-form-url');
    const darkThemeFormUrl = tallyIframe.getAttribute('data-dark-form-url');

    // Dynamically determine the current theme if it's not passed from the global scope
    let currentTheme = localStorage.getItem('theme') ||
                       document.documentElement.getAttribute('data-theme') ||
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    function updateTallyForm(theme) {
        const formUrl = theme === 'dark' ? darkThemeFormUrl : lightThemeFormUrl;
        tallyIframe.setAttribute('data-tally-src', formUrl);  // Set the data-tally-src attribute
        tallyIframe.src = formUrl;  // Set the actual src attribute for the iframe
    }

    // Initial form loading based on the current theme
    updateTallyForm(currentTheme);

    // Listen for theme changes
    window.addEventListener('themeChanged', (event) => {
        updateTallyForm(event.detail.theme);
    });
});
