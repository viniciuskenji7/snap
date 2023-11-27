// Navbar Desktop
const btnMenu = document.querySelector('#btn-submenu1');
const btnMenu2 = document.querySelector('#btn-submenu2');

const arrowUp = document.querySelector('.arrow-up1');
const arrowDown = document.querySelector('.arrow-down1');

const arrowUp2 = document.querySelector('.arrow-up2');
const arrowDown2 = document.querySelector('.arrow-down2');



btnMenu.addEventListener('click', ()=> {
    btnMenu.classList.toggle('abrir-menu');
    arrowDown.classList.toggle('fechar-arrow-down');
    arrowUp.classList.toggle('abrir-arrow-up');
});


btnMenu2.addEventListener('click', ()=> {
    btnMenu2.classList.toggle('abrir-menu');
    arrowDown2.classList.toggle('fechar-arrow-down');
    arrowUp2.classList.toggle('abrir-arrow-up');
});


// Navbar Mobile
const btnMenuMobile = document.querySelector('#btn-submenu1-mobile');
const btnMenuMobile2 = document.querySelector('#btn-submenu2-mobile');
const navbarResponsive = document.querySelector('.mobile-content');

const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');

const arrowUpMobile = document.querySelector('.arrow-up1-mobile');
const arrowDownMobile = document.querySelector('.arrow-down1-mobile');

const arrowUp2Mobile = document.querySelector('.arrow-up2-mobile');
const arrowDown2Mobile = document.querySelector('.arrow-down2-mobile');

btnMenuMobile.addEventListener('click', ()=> {
    btnMenuMobile.classList.toggle('abrir-submenu-mobile');
    arrowDownMobile.classList.toggle('close-arrow-down-mobile');
    arrowUpMobile.classList.toggle('open-arrow-up-mobile');
});

btnMenuMobile2.addEventListener('click', ()=>{
    btnMenuMobile2.classList.toggle('abrir-submenu-mobile');
    arrowDown2Mobile.classList.toggle('close-arrow-down-mobile');
    arrowUp2Mobile.classList.toggle('open-arrow-up-mobile');
});

openMenu.addEventListener('click', ()=> {
    navbarResponsive.classList.add('navbar-mobile');
    navbarResponsive.classList.remove('')
});

closeMenu.addEventListener('click', ()=>{
    navbarResponsive.classList.remove('navbar-mobile');
});