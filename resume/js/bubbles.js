const body = document.body;

// Function to create bubbles
/**
 * Creates 25 bubble elements and appends them to the body.
 * Each bubble is positioned randomly along the horizontal axis (left) 
 * and starts from the bottom of the page. The animation duration for 
 * each bubble is set randomly between 3 to 8 seconds.
 */
function createBubbles() {
    for (let i = 0; i < 25; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        body.appendChild(bubble);

        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.bottom = 0; // Position bubbles at the bottom of the page
        bubble.style.animationDuration = Math.random() * 5 + 3 + "s";
    }
}

// Function to create clouds
function createClouds() {
    for (let i = 0; i < 4; i++) {
        let cloud = document.createElement("div");
        cloud.classList.add("cloud");
        body.appendChild(cloud);
    }
}

// Function to create stars
function createStars() {
    for (let i = 0; i < 15; i++) {
        let star = document.createElement("div");
        star.classList.add("twinkle-star");
        body.appendChild(star);

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
    }
}

// Event listener for mouse movement to change background gradient
document.addEventListener("mousemove", function (event) {
    let x = event.clientX / window.innerWidth - 0.5;
    let y = event.clientY / window.innerHeight - 0.5;
    document.body.style.background = `radial-gradient(circle at ${50 + x * 20}% ${50 + y * 20}%, #FFDEE9, #ec8ed9)`;
});

// Event listener for click to create hearts
document.addEventListener("click", function(event) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 1000);
});

// Initialize elements
createBubbles();
createStars();
