// Add an event listener for the 'click' event on the document
document.addEventListener("click", function(event) {
    // Loop to create 3 concentric circles
    for (let i = 0; i < 3; i++) {
        // Create a new div element for the wave effect
        let wave = document.createElement("div");
        wave.classList.add("wave-effect");
        
        // Set the position of the wave effect to the click coordinates
        wave.style.left = `${event.clientX}px`;
        wave.style.top = `${event.clientY}px`;
        
        // Set the animation delay to stagger the start times of each wave
        wave.style.animationDelay = `${i * 0.2}s`;

        // Append the wave element to the body
        document.body.appendChild(wave);
        
        // Remove the wave element after 1 second to clean up the DOM
        setTimeout(() => { wave.remove(); }, 1000);
    }
});
