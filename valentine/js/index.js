document.addEventListener("DOMContentLoaded", function () {
    const text = "To my เด็กดื้อของพี่ 💖";
    let i = 0;
    function typeText() {
        if (i < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeText, 100);
        }
    }
    typeText();
});

function goToLetter() {
    window.location.href = "letter.html";
}
