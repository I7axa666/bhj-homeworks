const hintsList = Array.from(document.getElementsByClassName('has-tooltip'));


hintsList.forEach((el) => {
    el.addEventListener('click', (ev) => {
        ev.preventDefault();
        
        const { top, left } = el.getBoundingClientRect();
        let hintMessage = `<div class="tooltip tooltip_active" style="left: ${left}px; top: (${top} + 16)px">${el.title}</div>`;

        if(el.nextElementSibling === null || !el.nextElementSibling.classList.contains('tooltip_active')){
            if(document.getElementsByClassName('tooltip_active')[0]){document.getElementsByClassName('tooltip_active')[0].remove()}
            el.insertAdjacentHTML('afterEnd', hintMessage);
        } else {
            if(el.nextElementSibling.classList.contains('tooltip_active')){document.getElementsByClassName('tooltip_active')[0].remove()}

        }                                
    })
})