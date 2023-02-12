import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const next = document.querySelector('.news__slider--next');
const previous = document.querySelector('.news__slider--previous');

const Images = document.querySelectorAll('.news__slider--img');
const containerSlider = document.querySelector('.news__slider');

const size = Images[0].clientWidth;
let counter = 1;

containerSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';


next.addEventListener('click', ()=>{
    
    containerSlider.style.transition = 'transform 0.3s ease-in-out';
    counter++;
    containerSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

previous.addEventListener('click', ()=>{
    containerSlider.style.transition = 'transform 0.3s ease-in-out';
    counter--;
    containerSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

})


containerSlider.addEventListener('transitionend', ()=>{
    if(Images[counter].id === 'lastChild'){
        containerSlider.style.transition = 'none';
        counter = 1;
        containerSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(Images[counter].id === 'firstChild'){
        containerSlider.style.transition = 'none';
        counter = Images.length -2;
        containerSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})