const addButton = document.querySelectorAll('.product__add');
const incButton = document.querySelectorAll('.product__quantity-control_inc');
const decButton = document.querySelectorAll('.product__quantity-control_dec');
const cartTitle = document.querySelector('.cart');
const productList = [];



function addProduct (el, count) {
    let countProduct = count;
    if (productList.indexOf(el.closest('.product').dataset.id))  {
        let product = `<div class="cart__product" data-id="${el.closest('.product').dataset.id}">
                        <img class="cart__product-image" src="${el.closest('.product').querySelector('img').src}">
                        <div class="cart__product-count">${countProduct}</div>
                        </div>`;
        cartTitle.insertAdjacentHTML('beforeEnd', product);
        productList.push(el.closest('.product').dataset.id);
        console.log(productList);
    } else {
        let someProduct = document.querySelector(`.cart__product[data-id="${el.closest('.product').dataset.id}"]`)
        someProduct.getElementsByClassName('cart__product-count')[0].innerText = Number(someProduct.getElementsByClassName('cart__product-count')[0].textContent) + countProduct
    }
   
};


addButton.forEach((el) => {
    el.addEventListener('click', (ev) => {
        let count = Number(el.closest('.product__controls').getElementsByClassName('product__quantity-value')[0].textContent);
        addProduct(el, count)        

    })
});


incButton.forEach((el) => {
    el.addEventListener('click', (ev) => {
        let elCount = el.parentElement.getElementsByClassName('product__quantity-value');
        elCount[0].innerText = Number(elCount[0].textContent) + 1;
    })
});


decButton.forEach((el) => {
    el.addEventListener('click', (ev) => {
        let elCount = el.parentElement.getElementsByClassName('product__quantity-value');
        if (Number(elCount[0].textContent) > 1) {
            elCount[0].innerText = Number(elCount[0].textContent) - 1;
        }
    })
});

