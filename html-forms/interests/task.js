const checkBoxses = document.querySelectorAll('input');

checkBoxses.forEach((el, i) => {
    el.addEventListener('change', () => {
        let check = el.checked;
        if(el.closest('.interest').children.length > 1) {
            el.closest('.interest').children[1].querySelectorAll('input').forEach(el => {
                el.checked = check;
            })
        }
    })
})
