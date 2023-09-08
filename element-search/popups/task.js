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