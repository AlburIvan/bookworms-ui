let nav = document.querySelector('nav');
let burgerMenu = document.querySelector('.header-search__menu');
let burgerMenuClose = document.querySelector('.close');
let overlay = document.querySelector('.overlay');


burgerMenu.addEventListener('click', () => {
    nav.classList.add('open')
    overlay.classList.add('show')
});

burgerMenuClose.addEventListener('click', () => {
    nav.classList.remove('open')
    overlay.classList.remove('show')
});

overlay.addEventListener('click', () => {
    nav.classList.remove('open')
    overlay.classList.remove('show')
});

