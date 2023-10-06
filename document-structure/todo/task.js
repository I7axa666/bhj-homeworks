const input = document.getElementById('task__input');
let list = document.getElementById('tasks__list');
const pushButton = document.querySelector('#tasks__add');

document.querySelector('form').addEventListener('submit', e => {e.preventDefault()});

pushButton.addEventListener('click', (event) => {
    
    if (input.value.trim().length !== 0) {
        let task = `<div class="task">
                        <div class="task__title">${input.value}</div>
                        <a href="#" data-title="${input.value}" class="task__remove">&times;</a>
                    </div>`;
        
        list.insertAdjacentHTML('beforeEnd', task);
        let removeButton = document.querySelector(`.task__remove[data-title="${input.value}"]`)
        removeButton.addEventListener('click', (event) => {
            removeButton.parentElement.remove();
        })
        input.value = '';  
        
    }
})

