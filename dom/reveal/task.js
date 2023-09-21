
function isVis (el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom > 0) {
        el.classList.add('reveal_active')
    }

}


window.addEventListener('scroll', () => {
    let rev = Array.from(document.getElementsByClassName('reveal'));
    rev.forEach(el => {
        isVis(el);
    })

});