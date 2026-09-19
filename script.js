let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let stopBtn = document.getElementById("stop");

let time = 60;
let intervall = null;

startBtn.addEventListener("click", () => {
    intervall = setInterval(() => {
        time--;
        timer.textContent = time;
    }, 1000)
})

pauseBtn.addEventListener("click", () => {
    clearInterval(intervall)
    intervall = null;
})

stopBtn.addEventListener("click", () => {
    clearInterval(intervall);
    intervall = null;
    time = 60;
    timer.textContent = time;
})