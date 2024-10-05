document.addEventListener("DOMContentLoaded", function() {
    console.log("Website is loaded and ready!");
    
    // Example: Add a simple animation to the header when it's clicked
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        header.style.animation = 'shake 0.5s';
    });
    
    // Animation for shake effect
    header.addEventListener('animationend', function() {
        header.style.animation = ''; // Reset after animation ends
    });
});

/* Additional animations */
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}
