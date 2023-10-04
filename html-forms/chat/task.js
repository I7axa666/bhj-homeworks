const botMessages = [
    'Привет',
    'Пффф, вот еще!',
    'Что надо то?',
    'Дома нет никто!',
    'Извините, не расслышал...',
    'Маловероятно, то Вы нас заинтересуете',
    'У нас то всё хорошо, а у Вас?',
    'Ну это, как бы я бот... чего Вы хотите от бота добиться?',
    'Напишите завтра!',
    'Я передам Ваше послание...',
    'Ваше сообщение почему-то стёрлось в моем чате...',
    'У нас уже закрыто!',
    ];

const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
let chatMessages = document.querySelector('.chat-widget__messages');

function getTime (){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime
}

chat.addEventListener('click', (event) => {
    chat.classList.add('chat-widget_active');    
})


document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        if (!input.value || input.value.trim().length == 0){return}
        
        chatMessages.innerHTML += `<div class="message message_client">
                                   <div class="message__time">${getTime ()}</div> 
                                   <div class="message__text">${input.value}</div></div>`
        input.value = '';       
        chatMessages.innerHTML += `<div class="message"> 
                                   <div class="message__time">${getTime ()}</div> 
                                   <div class="message__text">${botMessages[Math.floor(Math.random() * ((botMessages.length) - 1) + 0 )]}</div></div>`
        console.log(Math.floor(Math.random() * ((botMessages.length) - 1) + 0), botMessages[Math.floor(Math.random() * ((botMessages.length) - 1) + 0 )]);
    }
    
})
