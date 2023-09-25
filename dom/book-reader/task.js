const btn = Array.from(document.querySelectorAll('.font-size'));
let size;

btn.forEach(value => {
value.addEventListener('click', selectBtn)
})

function selectBtn(event) {
    btn.forEach(value => {
        value.classList.remove('font-size_active');
        document.querySelector('.book').className = 'book';
    })

    this.classList.add('font-size_active');
    size = this.getAttribute('data-size');

    if (size == 'small') {
        document.querySelector('.book').classList.toggle('book_fs-small')
    }
    else if (size == 'big') {
        document.querySelector('.book').classList.toggle('book_fs-big')
    }
    else {
        document.querySelector('.book').className = 'book'
    }

    event.preventDefault()
}