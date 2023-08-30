const p = document.getElementById('timer');

const timer = setInterval(() => {
    p.textContent = Number(p.textContent) - 1
    if (Number(p.textContent) < 0) {
        clearInterval(timer);
        p.textContent = 0;
        alert("Вы победили в конкурсе!");
    }
}, 1000);



