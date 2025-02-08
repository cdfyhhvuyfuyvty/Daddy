// 💖 恋爱计时器
const loveStartDate = new Date("2025-01-01");
const timerElement = document.getElementById("timer");
function updateTimer() {
    const now = new Date();
    const diff = now - loveStartDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    timerElement.textContent = `${days} 天`;
}
setInterval(updateTimer, 1000);

// ☀️ 今日天气
function updateWeather() {
    document.getElementById("date").textContent = new Date().toDateString();
    document.getElementById("weatherInfo").textContent = "☀️ 天气晴朗 25°C";
}
updateWeather();

// 💬 Daddy 的每日问候
const messages = ["宝宝乖，今天也要开心！", "Daddy最爱小狗啦！", "想不想Daddy抱抱？"];
document.getElementById("daddyMessage").textContent = messages[Math.floor(Math.random() * messages.length)];

// 🎨 画板
function toggleCanvas() {
    document.getElementById("pixelCanvas").classList.toggle("hidden");
}
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
let painting = false;
canvas.addEventListener('mousedown', () => painting = true);
canvas.addEventListener('mouseup', () => painting = false);
canvas.addEventListener('mousemove', (event) => {
    if (painting) {
        ctx.fillStyle = colorPicker.value;
        ctx.fillRect(event.offsetX, event.offsetY, 10, 10);
    }
});
function saveDrawing() {
    const drawing = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = drawing;
    link.download = 'pixel-drawing.png';
    link.click();
}

// 🔊 互动音效
const clickSound = new Audio("click.mp3");
document.getElementById("clickMe").addEventListener("click", () => {
    clickSound.play();
    alert("小狗被点了！");
});

// 🎵 背景音乐
const music = document.getElementById("bgMusic");
document.getElementById("playMusic").addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

// 📅 纪念日日历
document.querySelectorAll('.date').forEach(button => {
    button.addEventListener('click', (event) => {
        const date = event.target.dataset.date;
        if (date === "2025-02-14") {
            event.target.textContent = '🌸';
        }
    });
});