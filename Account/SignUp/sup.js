// Function to create bubbles
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random() * 50 + 20; // Size between 20px and 70px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Define an array of 20 different colors
    const colors = [
        'rgba(255, 0, 0, 0.7)', // Red
        'rgba(0, 255, 0, 0.7)', // Green
        'rgba(0, 0, 255, 0.7)', // Blue
        'rgba(255, 255, 0, 0.7)', // Yellow
        'rgba(255, 0, 255, 0.7)', // Magenta
        'rgba(0, 255, 255, 0.7)', // Cyan
        'rgba(255, 165, 0, 0.7)', // Orange
        'rgba(128, 0, 128, 0.7)', // Purple
        'rgba(75, 0, 130, 0.7)', // Indigo
        'rgba(0, 128, 0, 0.7)', // Dark Green
        'rgba(128, 128, 0, 0.7)', // Olive
        'rgba(0, 0, 128, 0.7)', // Navy
        'rgba(255, 192, 203, 0.7)', // Pink
        'rgba(128, 0, 0, 0.7)', // Maroon
        'rgba(165, 42, 42, 0.7)', // Brown
        'rgba(255, 255, 255, 0.7)', // White
        'rgba(128, 128, 128, 0.7)', // Gray
        'rgba(0, 255, 127, 0.7)', // Spring Green
        'rgba(135, 206, 235, 0.7)', // Sky Blue
        'rgba(240, 230, 140, 0.7)', // Khaki
        'rgba(244, 164, 96, 0.7)'  // Sandy Brown
    ];

    // Assign a random color to the bubble
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.bottom = '-100px'; // Start below the screen

    document.querySelector('.bubbles-container').appendChild(bubble);

    const moveBubble = setInterval(() => {
        const bubblePosition = parseInt(bubble.style.bottom);
        
        if (bubblePosition < window.innerHeight + size) {
            bubble.style.bottom = bubblePosition + 1 + 'px'; // Move up
        } else {
            clearInterval(moveBubble); // Stop moving if it exits the screen
            bubble.remove(); // Remove bubble from DOM
        }
    }, 20);
}

// Create initial bubbles
for (let i = 0; i < 7; i++) {
    createBubble();
}

// Continuously create bubbles every 2 seconds
setInterval(createBubble, 2000);

// Function to show a notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    document.body.appendChild(notification);

    // Expand notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500); // Wait for shrink animation to complete
    }, 5000);
}

// Form validation and redirect
document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        showNotification('The password and confirmation password don\'t match');
        return;
    }

    // Redirect to the homepage after a successful sign-up
    window.location.href = "TechTonic.html";
});
