// Function to reveal sections when they come into view
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".resume-full-page section");

    const revealSection = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            
            if (rect.top < window.innerHeight * 0.8) {
                section.classList.add("visible");
                section.classList.remove("hidden");
            } else if (rect.bottom < 0) {
                section.classList.add("hidden");
                section.classList.remove("visible");
            }
        }); 
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
});

// Function to load skill bars when they come into view
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".progress-fill");

    const loadSkillBars = () => {
        skillBars.forEach((bar) => {
            const rect = bar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY || window.pageYOffset;
            const elementTop = rect.top + scrollPosition;

            // Check if the bottom of the screen has reached the skill bar
            if (scrollPosition + windowHeight > elementTop) {
                bar.style.width = bar.getAttribute("data-width") + "%";
            }
        });
    };

    window.addEventListener("scroll", loadSkillBars);
    loadSkillBars();
});

// Function to create bubbles at random positions
document.addEventListener("DOMContentLoaded", function () {
    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        document.body.appendChild(bubble);
        
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.bottom = -50 + "px"; // Start from the bottom of the page
        bubble.style.animationDuration = Math.random() * 5 + 3 + "s";

        setTimeout(() => bubble.remove(), 5000);
    }

    setInterval(createBubble, 1000);
});

// Function to create particles at random positions
document.addEventListener("DOMContentLoaded", function () {
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        document.body.appendChild(particle);
        
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.bottom = -50 + "px"; // Start from the bottom of the page
        particle.style.animationDuration = Math.random() * 5 + 3 + "s";

        setTimeout(() => particle.remove(), 5000);
    }

    setInterval(createParticle, 500);
});
