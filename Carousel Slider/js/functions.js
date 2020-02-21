'use strict';

function getSliderElements(elementId) {
    let element = document.getElementById(elementId);
    return element;
}

function slidePrev() {
    if (currentImageIndex === 0) {
        currentImageIndex = imagesArray.length;
    }
    currentImageIndex--;
    image.src = imagesArray[currentImageIndex]
}

function slideNext() {
    currentImageIndex++;  
    if (currentImageIndex === imagesArray.length) {
        currentImageIndex = 0;
    }
    image.src = imagesArray[currentImageIndex];
}

function restartInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(slideNext, 2000);
}