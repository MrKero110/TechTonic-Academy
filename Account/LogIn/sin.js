// Function to handle sign-in form submission
document.querySelector('.signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Add validation logic if necessary

    // Redirect to the homepage after a successful sign-in
    window.location.href = "TechTonic.html";
});

// Function to create a bubble
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Randomize bubble size
    const size = Math.random() * 50 + 20; // Size between 20px and 70px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Randomize bubble position
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.bottom = '-100px'; // Start below the screen

    // Randomize bubble color
    const colors = [
        'rgba(255, 165, 0, 0.7)',   // Light orange
        'rgba(0, 123, 255, 0.7)',   // Light blue
        'rgba(255, 99, 132, 0.7)',  // Light pink/red
        'rgba(75, 192, 192, 0.7)',  // Light teal
        'rgba(153, 102, 255, 0.7)', // Light purple
        'rgba(255, 206, 86, 0.7)',  // Light yellow
        'rgba(54, 162, 235, 0.7)',  // Light cyan
        'rgba(201, 203, 207, 0.7)', // Light grey
        'rgba(123, 239, 178, 0.7)', // Light green
        'rgba(252, 92, 101, 0.7)',  // Coral red
        'rgba(255, 184, 184, 0.7)', // Soft pink
        'rgba(248, 231, 28, 0.7)',  // Light gold
        'rgba(94, 53, 177, 0.7)',   // Medium purple
        'rgba(220, 20, 60, 0.7)',   // Crimson
        'rgba(255, 215, 0, 0.7)',   // Gold
        'rgba(135, 206, 235, 0.7)', // Sky blue
        'rgba(106, 90, 205, 0.7)',  // Slate blue
        'rgba(255, 127, 80, 0.7)',  // Coral
        'rgba(60, 179, 113, 0.7)',  // Medium sea green
        'rgba(139, 0, 139, 0.7)'    // Dark magenta
    ];
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector('.bubbles-container').appendChild(bubble);

    // Move bubble upwards
    const moveBubble = setInterval(() => {
        const bubblePosition = parseInt(bubble.style.bottom);
        
        if (bubblePosition < window.innerHeight + size) {
            bubble.style.bottom = bubblePosition + 2 + 'px'; // Move up
        } else {
            clearInterval(moveBubble); // Stop moving if it exits the screen
            bubble.remove(); // Remove bubble from DOM
        }
    }, 20);
}

// Limit the number of bubbles at a time to optimize performance
const maxBubbles = 20;

// Create multiple bubbles initially
for (let i = 0; i < 7; i++) {
    createBubble();
}

// Continuously create bubbles at a dynamic rate
setInterval(() => {
    if (document.querySelectorAll('.bubble').length < maxBubbles) {
        createBubble();
    }
}, 1500);
