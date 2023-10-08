const textContetn = document.querySelector('textarea'),
      storedText = localStorage.getItem('text');


setInterval(() => {
    if (!textContetn.value) {
        if(storedText) {
            textContetn.value = storedText
        }
        
    } else {

        localStorage.setItem('text', textContetn.value);     
        
    }
}, 1000)