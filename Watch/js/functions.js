'use strict';

function counter() {
    const time = new Date;
    const seconds = (time.getSeconds() + '');
    const minutes = (time.getMinutes() + '');
    const hours   = (time.getHours() + '');

    if (seconds.length === 2) {
        secondsImageLeft.src = images[seconds[0]];
        secondsImageRight.src = images[seconds[1]];
    } else {
        secondsImageLeft.src = images[0];
        secondsImageRight.src = images[seconds];
    }
    
    if (minutes.length === 2) {
        minutesImageLeft.src = images[minutes[0]];
        minutesImageRight.src = images[minutes[1]];
    } else {
        minutesImageLeft.src = images[0];
        minutesImageRight.src = images[minutes];
    }

    if (hours.length === 2) {
        hoursImageLeft.src = images[hours[0]];
        hoursImageRight.src = images[hours[1]];
    } else {
        hoursImageLeft.src = images[0];
        hoursImageRight.src = images[hours];
    }
}