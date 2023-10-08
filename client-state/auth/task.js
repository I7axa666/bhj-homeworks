const userForm = document.forms.signin__form;
const xhr = new XMLHttpRequest();
const wellcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const signinForm = document.querySelector('#signin');

if (localStorage.getItem('id')){
    signinForm.classList.remove('signin_active');
    wellcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('id');
} else {
    
    userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.addEventListener('readystatechange', () => {
        const resp = xhr.responseText;
        JSON.parse(resp)
        if(JSON.parse(resp)['success'] === false) {
            alert('Неверный логин/пароль')
        } else {
            signinForm.classList.remove('signin_active');
            wellcome.classList.add('welcome_active');
            localStorage.setItem('id', JSON.parse(xhr.response)['user_id']);
            userId.textContent = JSON.parse(xhr.response)['user_id'];
        }

    })
    

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    const formData = new FormData(userForm);
    xhr.send(formData);
    })
}

