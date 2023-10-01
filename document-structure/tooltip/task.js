const hintsList = Array.from(document.getElementsByClassName('has-tooltip'));


hintsList.forEach((el) => {
    el.addEventListener('click', (ev) => {
        const { top, left } = el.getBoundingClientRect();
        
        if(!el.querySelector('.tooltip')) {
            let hintMessage = `<div class="tooltip tooltip_active" style="left: ${left}px; top: (${top} + 16)px">${el.title}</div>`;
            el.insertAdjacentHTML('beforeEnd', hintMessage) 
        } else {
            el.querySelector('.tooltip').remove();
        }
                           
        ev.preventDefault();
    })
})