document.addEventListener("DOMContentLoaded", function () {
    // Animate the container element when the DOM is fully loaded
    gsap.from(".container", { opacity: 0, y: 50, duration: 1.5, ease: "power3.out" });

    // Get the next button element
    const nextButton = document.getElementById("nextButton");

    // Check if the next button exists
    if (nextButton) {
        // Add click event listener to the next button
        nextButton.addEventListener("click", function () {
            // Animate the body element and redirect to target URL on completion
            gsap.to("body", { opacity: 0, scale: 0.95, duration: 1, ease: "power3.inOut", onComplete: function () {
                window.location.href = "targetUrl";
            }});
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Animate the welcome text element when the DOM is fully loaded
    gsap.from(".welcome-text", { opacity: 0, y: 50, duration: 1.5, ease: "power3.out" });

    // Animate the lead element with a delay
    gsap.from(".lead", { opacity: 0, y: 30, duration: 1.2, delay: 0.5, ease: "power3.out" });

    // Animate the button group element with a delay
    gsap.from(".button-group", { opacity: 0, y: 20, duration: 1, delay: 0.8, ease: "power3.out" });
});
