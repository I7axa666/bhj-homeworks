const sendForm = document.forms.form,
      progress = document.getElementById('progress'),
      xhr = new XMLHttpRequest();

console.log(progress.value)      

sendForm.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.addEventListener('readystatechange', () => {
        progress.value += 0.25;

    })
    
    // const path = document.getElementsByClassName('input__wrapper-desc')

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(sendForm);
    xhr.send(formData);

})