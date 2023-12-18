let burgerButton = document.querySelector('.burger__button');
let header = document.querySelector('.header');
let headerNav = document.querySelector('.header__nav');
let headerNavItemB = document.querySelectorAll('.header__nav_item');
let favCoffeeLine = document.querySelector('.header__menu_line_fav_coffee');
let contactLine = document.querySelector('.header__menu_line_contact');
let headerMenu = document.querySelector('.header__menu');
let headerMenuCup = document.querySelector('.header__menu_cup-burger');
let headerMenuLineMenu = document.querySelector('.header__menu_line_menu');
let burgerLine = document.querySelectorAll('.burger__line');

burgerButton.addEventListener('click', closeOpenBurger
)

headerNavItemB.forEach((el)=>el.addEventListener('click', closeOpenBurger
))

window.addEventListener('resize',(e) => {
    if (document.documentElement.clientWidth > 768) {
        headerNav.classList.remove('header__nav_burger-open');
        burgerLine[0].classList.remove('burger__line1');
        burgerLine[1].classList.remove('burger__line2');
        headerMenu.classList.remove('header__menu_burger-open');
        headerMenuLineMenu.classList.remove('header__menu_line_menu-burger-open');
    }
    else {}
});

function closeOpenBurger(){
    headerNav.classList.toggle('header__nav_burger-open');
    burgerLine[0].classList.toggle('burger__line1');
    burgerLine[1].classList.toggle('burger__line2');
    headerMenu.classList.toggle('header__menu_burger-open');
    headerMenuLineMenu.classList.toggle('header__menu_line_menu-burger-open');
}
// burgerButton.addEventListener('click', function(){
//     console.log('dasha');
//     console.log(headerNavItemB);
//     header.classList.toggle('header__burger');
//     headerNav.classList.toggle('header__nav_burger');
//     headerNavItemB.forEach((el)=>el.classList.toggle('header__nav_item-burger'));
//     contactLine.classList.toggle('header__menu_line_contact-burger');
//     headerMenu.classList.toggle('header__menu_burger');
//     headerMenuCup.classList.toggle('header__menu_cup-burger');
//     headerMenuLineMenu.classList.toggle('header__menu_line_menu-burger');
//     burgerButton.classList.toggle('burger__button-open');
//     burgerLine[0].classList.toggle('burger__line1');
//     burgerLine[1].classList.toggle('burger__line2');
// })
