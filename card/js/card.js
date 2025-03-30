document.addEventListener("DOMContentLoaded", function () {
    // Card flip functionality
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });

    // PBN file upload and conversion
    const convertButton = document.getElementById("convertButton");
    const pbnFileInput = document.getElementById("pbnFile");


    convertButton.addEventListener("click", function () {
        const file = pbnFileInput.files[0];
        if (file && file.name.endsWith(".pbn")) {
            sessionStorage.setItem("pbnFileName", file.name);
            // ในอนาคตจะส่งไฟล์ไป backend เพื่อแปลงเป็น PDF
            // ตอนนี้แค่จำลองการส่งไปหน้า convert.html
            window.location.href = "convert.html";
        } else {
            alert("กรุณาเลือกไฟล์ .pbn");
        }
    });
});