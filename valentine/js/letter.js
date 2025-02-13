function showRandomPhoto() {
    const photos = Array.from({ length: 30 }, (_, i) => `/valentine/images/${i + 1}.jpg`);
    let randomIndex = Math.floor(Math.random() * photos.length);
    let photoPopup = document.getElementById("photo-popup");
    let randomPhoto = document.getElementById("random-photo");

    // รีเซ็ต popup ถ้ามีรูปเก่าค้างอยู่
    if (photoPopup.style.display === "block") {
        photoPopup.style.display = "none";
        photoPopup.classList.remove("fade-out");
    }

    // กำหนดรูปใหม่
    randomPhoto.src = photos[randomIndex];

    // คำนวณตำแหน่งให้รองรับทุกหน้าจอ
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let positionX = Math.random() < 0.5 ? screenWidth * 0.1 : screenWidth * 0.6; // ฝั่งซ้าย 10% หรือขวา 60%
    let positionY = screenHeight * 0.35; // กึ่งกลางแนวตั้ง

    if (screenWidth < 480) { 
        positionX = screenWidth * 0.2; // ปรับตำแหน่งให้พอดีหน้าจอมือถือ
    }

    // ตั้งค่าตำแหน่งของรูป
    photoPopup.style.left = `${positionX}px`;
    photoPopup.style.top = `${positionY}px`;

    // แสดงรูปพร้อมกับเพิ่มเอฟเฟกต์เฟดเข้า
    photoPopup.style.display = "block";
    photoPopup.style.opacity = "1";
    photoPopup.style.transform = "scale(1) translateY(0px)";

    // หลังจาก 3 วินาที ให้รูปค่อยๆ เลื่อนขึ้นแล้วจางหายไป
    setTimeout(() => {
        photoPopup.classList.add("fade-out");

        // ซ่อน popup หลังจาก fade ออกไป 1 วินาที
        setTimeout(() => {
            photoPopup.style.display = "none";
            photoPopup.classList.remove("fade-out");
        }, 1000);
    }, 3000);

    showHearts();
}

function showHearts() {
    for (let i = 0; i < 2; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        document.body.appendChild(heart);
        heart.style.left = Math.random() * window.innerWidth + "px"; // หัวใจลอยแบบสุ่ม
        heart.style.top = Math.random() * window.innerHeight + "px";
    }
}

setInterval(showHearts, 5000);