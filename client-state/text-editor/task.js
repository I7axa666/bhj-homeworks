const textContetn = document.querySelector('textarea');
const storedText = localStorage.getItem('text');

if(storedText) {
    textContetn.value = storedText
}

window.onbeforeunload = () => {
    localStorage.setItem('text', textContetn.value);
}


