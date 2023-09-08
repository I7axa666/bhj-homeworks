const sliderBtn = document.querySelectorAll('.slider__arrow');
const imgList = Array.from(document.querySelectorAll('.slider__item'));

const changeImg = function (side) {
    const imgCount = imgList.length - 1;
    let index = imgList.findIndex(el => el.className.includes("active"));
    imgList[index].className = "slider__item";
    
    if (side == 'left') {
        if (index == 0) {index = imgCount} else {index -= 1}     
    };

    if (side == 'right') {
        if (index == imgCount) {index = 0} else {index += 1}     
    };

    return imgList[index].className += " slider__item_active";
}

sliderBtn.forEach(el => {
    el.onclick = () => {
        if(el.className.includes('prev')) {
            changeImg('left');
        } else {
            changeImg('right') 
        }        
    }
});