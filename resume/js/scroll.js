document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".app-section");

    const revealSection = () => {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const triggerPoint = window.innerHeight * 0.8;

            if (rect.top < triggerPoint) {
                setTimeout(() => {
                    section.classList.add("visible");
                }, index * 150); // ✅ ค่อย ๆ โผล่ทีละอัน
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
});
