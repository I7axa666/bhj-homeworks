<<<<<<< HEAD
const classes = document.getElementsByClassName('modal');
const modalArray = Array.from(classes);
const closeArry = document.getElementsByClassName('modal__close');
const closeBtn = Array.from(closeArry);
const goodBtn = document.getElementById('show-success');

closeBtn[0].onclick = () => {
    modalArray[0].className = 'modal';
};


goodBtn.onclick = () => {
    console.log('OK')
    // modalArray[1].className = 'modal_success';
};
=======
const classes = Array.from(document.querySelectorAll('.modal'));

const closses = Array.from(document.querySelectorAll('.modal__close'));




classes[0].className += ' modal_active';


closses.forEach(el => {
    el.addEventListener('click', e => {
            classes.forEach(el => {
                el.className = 'modal'
            })
        })
});


document.querySelector('.show-success').addEventListener('click', e => {
    classes[1].className += ' modal_active';
});

>>>>>>> 7345ebddb460619a05501348943752c36e965aab
