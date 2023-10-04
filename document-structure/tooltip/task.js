const hintsList = Array.from(document.getElementsByClassName('has-tooltip'));


hintsList.forEach((el) => {
    el.addEventListener('click', (ev) => {
        ev.preventDefault();

        const { top, left } = el.getBoundingClientRect();
        
        if(!document.getElementsByClassName('tooltip_active')[0]) {
            let hintMessage = `<div class="tooltip tooltip_active" style="left: ${left}px; top: (${top} + 16)px">${el.title}</div>`;
            el.insertAdjacentHTML('afterEnd', hintMessage) 
        } else {
            document.getElementsByClassName('tooltip_active')[0].remove();
        }
                           
    })
})