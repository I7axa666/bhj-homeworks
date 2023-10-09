const sendForm = document.forms.form,
      progress = document.getElementById('progress'),
      xhr = new XMLHttpRequest();
    

sendForm.addEventListener('submit', (e) => {
    e.preventDefault();

    xhr.onprogress = function(event) {
        progress.value = event.loaded / event.total;

    }
    

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(sendForm);
    xhr.send(formData);

})