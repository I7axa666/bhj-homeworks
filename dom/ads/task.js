
let i = 0;

function changeClass(i) {
    
    let int = setInterval(() => {
        let span = document.getElementsByClassName('rotator__case')
        
        if (span[i].classList.contains('rotator__case_active')) {
            span[i].classList.remove('rotator__case_active')
            if (i == span.length - 1) {
                span[0].classList.add('rotator__case_active');
                i = 0;
            } else {
                span[i += 1].classList.add('rotator__case_active');
            }
            
        }
        

    }, 1000)
    
};

changeClass(i)
