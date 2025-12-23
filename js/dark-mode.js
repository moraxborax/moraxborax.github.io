let isDarkMode = false;

function toggleMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark');
    
    const button = document.getElementById("dmbutton");
    if (isDarkMode) {
        button.src = "./Button/Dark Mode.png";
    } else {
        button.src = "./Button/Light Mode.png";
    }
}

// Initialize dark mode
document.addEventListener('DOMContentLoaded', function() {
    toggleMode(); // Start with dark mode
});
