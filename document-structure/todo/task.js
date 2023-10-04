const input = document.getElementById('task__input');
let list = document.getElementById('tasks__list');
const pushButton = document.querySelector('#tasks__add');

document.querySelector('form').addEventListener('submit', e => {e.preventDefault()});

pushButton.addEventListener('click', (event) => {
    
    if (input.value) {
        let task = `<div class="task">
                        <div class="task__title">${input.value}</div>
                        <a href="#" class="task__remove">&times;</a>
                    </div>`;
        
        list.insertAdjacentHTML('beforeEnd', task);
        input.value = '';

        Array.from(document.querySelectorAll(`.task__remove`)).at(-1).addEventListener('click', (event) => {
            let el = Array.from(document.querySelectorAll(`.task__remove`)).at(-1);        
            el.parentElement.remove();
        })  
        
    }
})

