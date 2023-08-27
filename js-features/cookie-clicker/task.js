const cc = document.getElementById("clicker__counter");

const img = document.getElementById("cookie");
console.log(cc);



img.onclick = () => {
    img.width += 20;
    img.hieght += 20;

    cc.textContent = String(Number(cc.textContent) + 1);

    setTimeout(() =>{
        img.width -= 20;
    img.hieght -= 20;
    }, 100)
};

