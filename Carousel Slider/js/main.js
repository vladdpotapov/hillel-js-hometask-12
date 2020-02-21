'use strict';

buttonNext.addEventListener('click', () => {
    slideNext();
    restartInterval();
});

buttonPrev.addEventListener('click', () => {
    slidePrev();
    restartInterval();
});