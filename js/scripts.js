

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

// const open = document.getElementById("open")
// const modal_container = document.getElementById("modal_container")
// const close = document.getElementById("close")

// open.addEventListener("click", () => {
//     modal_container.classList.add('show')
// });
// close.addEventListener("click", () => {
//     modal_container.classList.remove('show')
// });


       

   


