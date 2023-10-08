const item = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE){
        loader.classList.remove('loader_active')
    }
     
    let charCodeList = [];            
    JSON.parse(xhr.response, function(key, value) {
        
       if (key === "CharCode") {charCodeList.push(value)}
    })

    charCodeList.forEach(element => {
        console.log(JSON.parse(xhr.response).response.Valute[element])
        let dataValute = `<div class="item">
        <div class="item__code">${JSON.parse(xhr.response).response.Valute[element]['CharCode']}</div>
                <div class="item__value">${JSON.parse(xhr.response).response.Valute[element]['Value']}</div>
                <div class="item__currency">руб.</div></div>
                `;
        
        item.insertAdjacentHTML('beforeend', dataValute);
    });
})


xhr.open('GET', " https://students.netoservices.ru/nestjs-backend/slow-get-courses")

xhr.send()