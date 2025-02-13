// Function: สร้างไอคอนไพ่
document.addEventListener("DOMContentLoaded", function () {
    const icons = ["♠️", "♥️", "♦️", "♣️"]; // ไอคอนไพ่
    const container = document.getElementById("cardIconsContainer");

    for (let i = 0; i < 50; i++) { // สร้าง 15 อัน
        let icon = document.createElement("div");
        icon.classList.add("card-icon");
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];

        icon.style.left = Math.random() * 100 + "vw";
        icon.style.top = Math.random() * 100 + "vh";
        icon.style.animationDelay = Math.random() * 2.5 + "s"; // ทำให้แต่ละตัวเริ่มไม่พร้อมกัน

        container.appendChild(icon);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const cardFallContainer = document.getElementById("cardFallContainer");
    const cardTypes = ['../images/spades.png', '../images/heart.png', '../images/club.png', '../images/diamond.png'];

    document.querySelectorAll(".button-group button").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            
            // ✅ ดึงค่าหน้าปลายทาง
            const targetPage = this.getAttribute("data-target");
            
            // ✅ เซ็ตเพลงก่อนเปลี่ยนหน้า
            if (this.id === "enterWithMusic") {
                sessionStorage.setItem("playMusic", "true");
                sessionStorage.setItem("isMusicPlaying", "true");
            } else {
                sessionStorage.setItem("isMusicPlaying", "false");
            }     

            // ✅ สร้างไพ่ล้มลงมาปิดจอ
            for (let i = 0; i < 100; i++) { // ✅ เพิ่มไพ่ให้เยอะขึ้น
                let card = document.createElement("div");
                card.classList.add("falling-card");

                // ✅ สุ่มประเภทไพ่
                let cardType = cardTypes[i % cardTypes.length];
                card.style.backgroundImage = `url(${cardType})`;

                // ✅ สุ่มตำแหน่งเริ่มต้นด้านซ้าย (เต็มจอ)
                let startLeft = (i % 10) * 10 + "vw"; // 10 ใบต่อแถว
                if (Math.floor(i / 10) % 2 === 1) { // ✅ ขยับแถวที่สองไปอีกนิด
                    startLeft = (i % 10) * 10 + 5 + "vw";
                }
                card.style.setProperty("--start-left", startLeft);

                // ✅ กำหนดตำแหน่งปลายทางให้ปิดหน้าจอ
                let endTop = (100 - (i * 1.25)) + "vh"; // เพิ่มการซ้อนกันในแนวตั้ง
                card.style.setProperty("--end-top", endTop);

                // ✅ กำหนดมุมหมุนแบบสุ่ม
                let rotateAngle = Math.random() * 40 - 20 + "deg";
                card.style.setProperty("--rotate-angle", rotateAngle);

                cardFallContainer.appendChild(card);

                // ✅ ดีเลย์ให้แต่ละใบร่วงลงมาตามลำดับ
                setTimeout(() => {
                    card.classList.add("active");
                }, i * 50);
            }

            // ✅ รอให้ไพ่ล้มเสร็จแล้วค่อยเปลี่ยนหน้า
            setTimeout(() => {
                window.location.href = targetPage;
            }, 5000); // 🔥 รอ 5 วิก่อนเปลี่ยนหน้า
        });
    });
});



