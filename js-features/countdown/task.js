const p = document.getElementById('timer');

setInterval(() => {
    p.textContent = Number(p.textContent) - 1
    if (Number(p.textContent) == 0) {
        p.textContent = 10;
        alert("Вы победили в конкурсе!");
    }
}, 1000);



