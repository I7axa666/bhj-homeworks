function changeClass() {
    let span = Array.from(document.getElementsByClassName('rotator__case'));
    span.forEach((el, i) => {
        if(el.classList.contains('rotator__case_active')) {
            el.classList.remove('rotator__case_active');            
            if(i === span.length - 1) {
                return span[0].classList.add('rotator__case_active');
            } else {
                return span[i=+1].classList.toggle('rotator__case_active');
                
            }
        }
    })
};

setInterval(() => {changeClass()}, 1000);