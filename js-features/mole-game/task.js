let countWin = 0;
let countLose = 0;

getHole = index => document.getElementById(`hole${index}`)

for(let i = 1; i < 10; i++) {
    let hole = document.getElementById(`hole${i}`)
    
    hole.onclick = () => {
        if (getHole(i).className == "hole hole_has-mole") {
            countWin += 1;
            document.getElementById('dead').textContent = String(countWin);
        } else {
            countLose +=1;
            document.getElementById('lost').textContent = String(countLose);
        }
        
        if(countWin == 10) {
            countWin = 0;
            countLose = 0;
            document.getElementById('dead').textContent = String(countWin);
            document.getElementById('lost').textContent = String(countLose);
            alert("Вы выиграли");
        }
        if(countLose == 5) {
            countWin = 0;
            countLose = 0;
            document.getElementById('dead').textContent = String(countWin);
            document.getElementById('lost').textContent = String(countLose);
            alert("Вы проиграли");
        }
    }   
}








