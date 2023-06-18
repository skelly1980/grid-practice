const btnOpen = document.querySelector('.mobile-menu-open');
btnClose = document.querySelector('.fa-x');
const menu = document.querySelector('.mobile-nav-menu');

btnOpen.addEventListener('click', () => {
    menu.classList.toggle('active');
});

btnClose.addEventListener('click', () => {
    menu.classList.toggle('active');
});

