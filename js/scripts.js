

let menu = document.getElementById('menu');
let toggleOpen = document.getElementById('toggle__open');
let toggleClose = document.getElementById('toggle__close');


toggleOpen.addEventListener('click', toggleMenu);
toggleClose.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('show__menu')

    if(menu.classList.contains('show__menu')){
        toggleOpen.style.display= 'none';
        toggleClose.style.display= 'block';
    } else {
        toggleOpen.style.display= 'block';
        toggleClose.style.display= 'none';
    }
}