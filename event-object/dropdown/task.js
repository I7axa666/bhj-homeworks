let btn = document.querySelector('.dropdown__value');
let dl = document.querySelector('.dropdown__list');
let di = Array.from(document.querySelectorAll('.dropdown__item'));
const changeName = function(i) {
    btn.textContent = di[i].textContent;
};

const openMenu = function() {
    if(!dl.className.includes('active')) {
        dl.className += " dropdown__list_active";
    }
};

btn.addEventListener('click', openMenu);

di.forEach((el, i) => {
    let subj =  el.querySelector('.dropdown__link')
    
    subj.addEventListener('click', (event) => {
        event.preventDefault();
        changeName(i);
        dl.className = "dropdown__list"; 
    });
});