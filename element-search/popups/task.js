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

