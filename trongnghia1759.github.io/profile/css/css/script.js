document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');

    // Đưa trình phát nhạc xuống cuối trang nếu cần
    if (audio) {
        document.body.appendChild(audio);
    }
});

// Kích hoạt nhạc khi người dùng tương tác lần đầu
window.addEventListener('click', () => {
    const audio = document.getElementById('myAudio');
    if (audio && audio.muted) {
        audio.muted = false;
        audio.play().catch(err => console.log("Chưa phát được nhạc:", err));
    }
}, { once: true });
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    const card = document.querySelector('.card');

    // 1. Tự động di chuyển thẻ audio xuống cuối body nếu nó đang nằm ở chỗ khác
    if (audio) {
        document.body.appendChild(audio);
    }
