const item = document.getElementById('items');
const loader = document.getElementById('loader');
const fragment = new DocumentFragment;

const xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status == 200) {
        loader.classList.remove('loader_active')
    }
     
    let charCodeList = [];            
    JSON.parse(xhr.response, function(key, value) {
        
       if (key === "CharCode") {charCodeList.push(value)}
    })

    charCodeList.forEach(element => {
        let divItem = document.createElement('div');
        divItem.classList.add('item');
        
        let divItemCode = document.createElement('div');
        divItemCode.classList.add('item__code');
        divItemCode.textContent = JSON.parse(xhr.response).response.Valute[element]['CharCode'];
        
        let divItemValue = document.createElement('div');
        divItemValue.classList.add('item__value');
        divItemValue.textContent = JSON.parse(xhr.response).response.Valute[element]['Value'];
        
        let divItemCurrency = document.createElement('div');
        divItemCurrency.classList.add('item__currency');
        divItemCurrency.textContent = 'руб.';

        divItem.append(divItemCode, divItemValue, divItemCurrency)
        fragment.append(divItem);

    });

    item.append(fragment);
}


xhr.open('GET', " https://students.netoservices.ru/nestjs-backend/slow-get-courses")

xhr.send()