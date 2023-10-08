const pollTitle = document.getElementById('poll__title')
const pollAnswer = document.getElementById('poll__answers')

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE){
        let resp = xhr.responseText;
        let respArray = {}
        JSON.parse(resp,(key, value) => {
            respArray[key] = value
        })

        pollTitle.textContent = respArray['title'];

        for(let i = 0; i< Number(respArray['answers'].length); i++) {
    
            let answ = `<button class="poll__answer">
                        ${respArray[String(i)]}
                        </button>`
          
            pollAnswer.insertAdjacentHTML('beforeend', answ);
        }
        
        const but = document.querySelectorAll('.poll__answer')
        console.log(but)
        but.forEach(el => {
            el.addEventListener('click', event => {
                event.preventDefault()
                alert("Спасибо, ваш голос засчитан!")
            })
        })
    }
    
})

xhr.open('GET', "https://students.netoservices.ru/nestjs-backend/poll")

xhr.send()