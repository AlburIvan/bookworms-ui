let nav             = document.querySelector('nav');
let burgerMenu      = document.querySelector('.header-search__menu');
let burgerMenuClose = document.querySelector('.close');
let overlay         = document.querySelector('.overlay');


burgerMenu.addEventListener('click', () => {
    nav.classList.add('open')
    overlay.classList.add('show')
    document.body.classList.add('no-scrollable');
});

burgerMenuClose.addEventListener('click', () => {
    nav.classList.remove('open');
    overlay.classList.remove('show');
    document.body.classList.remove('no-scrollable');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('open');
    overlay.classList.remove('show');
    document.body.classList.remove('no-scrollable');
});