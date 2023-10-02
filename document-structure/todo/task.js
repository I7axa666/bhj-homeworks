const input = document.getElementById('task__input');
let list = document.getElementById('tasks__list');

document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        if (input.value) {
            let task = `<div class="task">
                            <div class="task__title">${input.value}</div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`;
            
            list.insertAdjacentHTML('beforeEnd', task);
            input.value = '';
            
        }
    
        let taskRemove = document.querySelectorAll('.task__remove');
            
        taskRemove.forEach(el => {
            el.addEventListener('click', (event) => {
                el.parentElement.remove();
            })
        });
    }
})

