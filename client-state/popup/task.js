const popWind = document.getElementById('subscribe-modal');
const popClose = document.querySelector('.modal__close');


function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length +1)
}


if(document.cookie) {
    if(getCookie('isClose') == '1') {
        popWind.classList.contains('modal_active')
    }

} else {
    popWind.classList.add('modal_active');
    popClose.addEventListener('click', event => {
        event.preventDefault();
        popWind.classList.remove('modal_active');
        setCookie('isClose', 1);
        console.log(document.cookie)
    })
}



