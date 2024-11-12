// script.js

// Ngày Giáng sinh 2024
const christmasDate = new Date("2024-12-24T00:00:00");

// Hàm để cập nhật thời gian đếm ngược
function updateCountdown() {
    // Lấy thời gian hiện tại
    const now = new Date();
    
    // Tính toán thời gian còn lại (milisecond)
    const timeRemaining = christmasDate - now;

    // Nếu đã đến ngày Giáng sinh, dừng đếm ngược
    if (timeRemaining <= 0) {
        document.getElementById('message').textContent = 'Chúc Mừng Giáng Sinh!';
        clearInterval(countdownTimer);
        return;
    }

    // Tính toán số ngày, giờ, phút, giây còn lại
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Hiển thị thời gian còn lại
    document.getElementById('timerDisplay').textContent = 
        `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

// Cập nhật mỗi giây
const countdownTimer = setInterval(updateCountdown, 1000);

// Gọi hàm ngay khi trang được tải
updateCountdown();

// Thêm hiệu ứng tuyết rơi
function createSnowflakes() {
    const snowflakeCount = 30; // Số lượng bông tuyết

    for (let i = 0; i < snowflakeCount; i++) {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄"; // Biểu tượng tuyết
        snowflake.style.left = `${Math.random() * 100}vw`; // Vị trí ngẫu nhiên
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Thời gian rơi ngẫu nhiên
        snowflake.style.fontSize = `${Math.random() * 1.5 + 1.5}em`; // Kích thước ngẫu nhiên
        document.body.appendChild(snowflake);
    }
}

// Tạo tuyết rơi ngay khi trang tải
createSnowflakes();
