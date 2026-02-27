// Language data for auto-switching
const languages = [
    { path: 'flags/ukraine.png', name: 'Українська', code: 'UA' },
    { path: 'flags/us.png', name: 'English', code: 'EN' },
    { path: 'flags/france.png', name: 'Français', code: 'FR' },
    { path: 'flags/spain.png', name: 'Español', code: 'ES' },
    { path: 'flags/germany.png', name: 'Deutsch', code: 'DE' }
];

let currentLanguageIndex = 1; // Start from English
let autoSwitchInterval = null;
let userHasInteracted = false;

function showFlag(imagePath, name, code) {
    const display = document.getElementById('flag-display');

    display.innerHTML = `
        <div class="app-window animate-in">
            <img src="${imagePath}" alt="${name} flag" class="flag-icon" width="181" height="185">
            <div class="language-label">${name}</div>
        </div>
    `;
}

// Auto-switch languages
function autoSwitchLanguage() {
    if (userHasInteracted) return;

    const lang = languages[currentLanguageIndex];
    showFlag(lang.path, lang.name, lang.code);

    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
}

// Start auto-switching on page load
function startAutoSwitch() {
    // Show first language immediately
    autoSwitchLanguage();

    // Continue switching every 3 seconds
    autoSwitchInterval = setInterval(autoSwitchLanguage, 3000);
}

// Stop auto-switching when user clicks
function stopAutoSwitch() {
    if (autoSwitchInterval) {
        clearInterval(autoSwitchInterval);
        autoSwitchInterval = null;
        userHasInteracted = true;
    }
}

// Add click handlers to all language buttons
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button[onclick^="showFlag"]');
    buttons.forEach(button => {
        button.addEventListener('click', stopAutoSwitch);
    });

    // Start auto-switching after a short delay
    setTimeout(startAutoSwitch, 500);
});

// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const icon = document.getElementById('theme-icon');
    const btn = document.getElementById('theme-toggle-btn');

    html.setAttribute('data-theme', newTheme);
    icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

    // Save preference
    localStorage.setItem('theme', newTheme);
}

// Load saved theme on page load
(function () {
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || 'dark'; // Default to dark theme

    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('theme-icon');
    const btn = document.getElementById('theme-toggle-btn');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    if (btn) {
        btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
})();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
