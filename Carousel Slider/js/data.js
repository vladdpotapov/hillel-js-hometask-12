'use strict';

const imagesArray = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg'];

const image      = getSliderElements('slider__image');

const buttonNext = getSliderElements('slider__button-next');
const buttonPrev = getSliderElements('slider__button-prev');

let currentImageIndex = 0;

let sliderInterval = setInterval(slideNext, 2000);