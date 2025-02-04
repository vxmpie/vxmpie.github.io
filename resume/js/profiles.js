document.addEventListener("DOMContentLoaded", function () {
    // Animation for the resume container
    gsap.from(".resume-container", { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        ease: "power3.out" 
    });

    // Animation for profile cards
    gsap.from(".profile-card", { 
        opacity: 0, 
        scale: 0.9, 
        duration: 1, 
        stagger: 0.2 
    });

    // Check if we are on the profiles.html page
    const profilePopup = document.getElementById("profile-popup");
    if (profilePopup) {  
        const popupImage = document.getElementById("popup-image");
        const popupName = document.getElementById("popup-name");
        const backButton = document.getElementById("popup-back");
        const enterButton = document.getElementById("popup-enter");
        const profileNames = ["Toon", "Cream", "Meepooh", "Ice Cream", "Latte"]; // Names for each profile

        // Add click event listeners to each profile link
        document.querySelectorAll(".profile-list a").forEach((profileLink, index) => {
            const img = profileLink.querySelector("img");

            profileLink.addEventListener("click", function(event) {
                event.preventDefault(); 

                if (!profilePopup || !popupImage || !popupName) return;

                // Set popup image and name based on the clicked profile
                popupImage.src = img.src;
                popupName.textContent = profileNames[index]; 

                // Store the profile URL in the popup's dataset
                profilePopup.dataset.profileUrl = profileLink.getAttribute("href");

                // Show the popup and add blur to the background
                profilePopup.classList.remove("hidden");
                document.body.classList.add("blur-bg");

                // Animate the popup appearance
                gsap.to(profilePopup, { 
                    opacity: 1, 
                    scale: 1, 
                    duration: 0.3, 
                    ease: "power2.out" 
                });
            });
        });

        // Back button event listener to close the popup
        backButton.addEventListener("click", function(event) {
            event.preventDefault(); 

            // Animate the popup disappearance
            gsap.to(profilePopup, { 
                opacity: 0, 
                scale: 0.9, 
                duration: 0.3, 
                ease: "power2.out", 
                onComplete: () => {
                    profilePopup.classList.add("hidden");
                    document.body.classList.remove("blur-bg");
                }
            });
        });

        // Enter button event listener to navigate to the selected profile
        enterButton.addEventListener("click", function(event) {
            event.preventDefault(); 

            let profileUrl = profilePopup.dataset.profileUrl;
            if (profileUrl) {
                // Remove blur class before navigating
                document.body.classList.remove("blur-bg"); 

                // Animate the page transition
                gsap.to("body", { 
                    filter: "blur(20px)", 
                    opacity: 0, 
                    duration: 0.8, 
                    ease: "power2.inOut", 
                    onComplete: function () {
                        window.location.href = profileUrl;
                    }
                });
            }
        });
    }
});