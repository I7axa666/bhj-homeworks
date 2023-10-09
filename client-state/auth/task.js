const userForm = document.forms.signin__form;
const xhr = new XMLHttpRequest();
const wellcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const signinForm = document.querySelector('#signin');


if (localStorage.getItem('id')){
    signinForm.classList.remove('signin_active');
    wellcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('id');
}

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.onload = function() {
        const resp = xhr.response;
        if(resp['success'] === false) {
            alert('Неверный логин/пароль')
        } else {
            userForm.reset();
            signinForm.classList.remove('signin_active');
            wellcome.classList.add('welcome_active');
            localStorage.setItem('id', resp['user_id']);
            userId.textContent = resp['user_id'];
        }

    }
    

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    const formData = new FormData(userForm);
    xhr.responseType = 'json'
    xhr.send(formData);
})

