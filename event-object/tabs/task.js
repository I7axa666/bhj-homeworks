let conButton = Array.from(document.querySelectorAll('.tab'));
let contentList = Array.from(document.querySelectorAll('.tab__content'));

conButton.forEach((el, i) => {
    el.addEventListener('click', () => {
        
        let classArray = conButton.map((e)=> e.className);
        let activeIndex = classArray.indexOf('tab tab_active');
        
        conButton[activeIndex].className = 'tab';
        contentList[activeIndex].className = 'tab__content';

        el.className = 'tab tab_active';
        contentList[i].className = 'tab__content tab__content_active';
        
    })
})
