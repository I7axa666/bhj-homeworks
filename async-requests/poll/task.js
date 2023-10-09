const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');
const fragment = new DocumentFragment;
const xhr = new XMLHttpRequest();

xhr.open('GET', "https://students.netoservices.ru/nestjs-backend/poll")

xhr.send()

xhr.onload = function() {
    if (xhr.status == 200) {
        let resp = xhr.responseText;
        let respArray = {}
        JSON.parse(resp,(key, value) => {
            respArray[key] = value
        })

        pollTitle.textContent = respArray['title'];

        for(let i = 0; i< Number(respArray['answers'].length); i++) {
    
            let button = document.createElement('button');
            button.classList.add('poll__answer');
            button.textContent = respArray[String(i)];
            fragment.append(button)          

            pollAnswer.append(fragment);
        }
        
        const but = document.querySelectorAll('.poll__answer')
        but.forEach(el => {
            el.addEventListener('click', event => {
                event.preventDefault()
                alert("Спасибо, ваш голос засчитан!")
            })
        })
    }
}