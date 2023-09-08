const links = Array.from(document.querySelectorAll('.menu__item'));

links.forEach(el => {
    let link = el.querySelector('.menu__link');
    let sub = el.querySelector('.menu_sub');
   
    link.onclick = () => {
        if (link.getAttribute('href') == "") {
            if (link.parentElement.querySelector('.menu_sub').className.indexOf('active') > 0) {
                link.parentElement.querySelector('.menu_sub').className = "menu menu_sub";
                return false;
            } else {
                link.parentElement.querySelector('.menu_sub').className += " menu_active";
            return false;
            }
            
        }        
    }
  
});
