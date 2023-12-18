let i = 1
let turnRight = document.querySelector(".fav__content_button-right");
let turnLeft = document.querySelector('.fav__content_button-left');
let paginaton = document.querySelectorAll('.fav__content_beverage-pag-item')
let slider = document.querySelector('.slider')
let pagActive = document.querySelector('.pag__active');
let pagItemsActive = document.querySelectorAll('.fav__content_beverage-pag-item-active');
const step = 2000;
let width;
let x1;
let x2;
let xTotal

document.addEventListener('mousedown',() => x1=event.pageX);
document.addEventListener('touchstart',() => x1=event.pageX);
document.addEventListener('mouseup', () => {
   x2=event.pageX;
   xTotal=x2-x1
   dragSvipe()
});
document.addEventListener('touchend', () => {
   x2=event.pageX;
   xTotal=x2-x1
   dragSvipe()
});

// листаем слайдер при свайпе мыши
function dragSvipe(){
   if (xTotal>=20){
      console.log(xTotal+' left');
      moveLeft()
      return 
   }
   else if (xTotal<-20) {
      console.log('unpress '+ x1);
      console.log('unpress '+ x2);
      console.log('unpress '+ xTotal+ ' right');
      moveRight()
      return 
      }
}




// при наведении останавливаем листание, начинаем при убирании мыши
width = window.getComputedStyle(pagActive).width;
let hover;
slider.addEventListener('mouseover', () => {hover = 1;});
slider.addEventListener('mouseout', () => hover = 0);



function moveRight() {

   pagItemsActive[i-1].classList.toggle('pag__active')
   if (i===3){i=1} else {i=i+1}
   slider.style.transform = `translateX(-${(i-1)*480}px)`
   pagItemsActive[i-1].classList.toggle('pag__active')
   
}

function moveLeft() {
   pagItemsActive[i-1].classList.toggle('pag__active')
   if (i===1){i=3} else {i=i-1}
   slider.style.transform = `translateX(-${(i-1)*480}px)` 
   pagItemsActive[i-1].classList.toggle('pag__active')
}

// let timerId = setInterval(() => !hover && moveRight(), step);


turnRight.addEventListener('click', function (){clearInterval(timerId);moveRight();timerId = setInterval(() => moveRight(), step)})
turnLeft.addEventListener('click', function (){clearInterval(timerId);moveLeft();timerId = setInterval(() => moveRight(), step)})

