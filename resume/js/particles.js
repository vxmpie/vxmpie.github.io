// Select the container where particles will be added
const particlesContainer = document.body;

// Loop to create 15 star elements
for (let i = 0; i < 15; i++) {
    // Create a new div element for the star
    let star = document.createElement("div");
    
    // Add the 'star' class to the div element
    star.classList.add("star");
    
    // Append the star element to the particles container
    particlesContainer.appendChild(star);

    // Set random position and animation duration for the star
    star.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    star.style.top = Math.random() * 100 + "vh"; // Random vertical position
    star.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random animation duration between 2s and 5s
}
