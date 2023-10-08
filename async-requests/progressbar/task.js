const sendForm = document.forms.form,
      progress = document.getElementById('progress'),
      xhr = new XMLHttpRequest();
    

sendForm.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.addEventListener('readystatechange', () => {
        progress.value += 0.25;

    })
    

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(sendForm);
    xhr.send(formData);

})