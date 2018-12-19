/*
 * Open Source Project made by Daksh (daksh7011.com)
 * Please do not remove it. It helps me.
 * This project is Licenced under MIT.
 */

"use strict";
$(window).on("load", function() {
    function countDown() {
        let today = new Date();
        let comingsoonDate = new Date("December 31,2018 23:59:58");
        let currentTime = today.getTime();
        let countdownTime = comingsoonDate.getTime();
        let actualTime = countdownTime - currentTime;

        let sec = Math.floor(actualTime / 1000);
        let min = Math.floor(sec / 60);
        let hrs = Math.floor(min / 60);
        let days = Math.floor(hrs / 24);

        hrs %= 24;
        min %= 60;
        sec %= 60;

        days = (days < 10) ? "0" + days : days;
        hrs = (hrs < 10) ? "0" + hrs : hrs;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        let elTimeCounter = $('.time-counter');
        let elDays = $('.days', elTimeCounter);
        let elHours = $('.hours', elTimeCounter);
        let elMinutes = $('.minutes', elTimeCounter);
        let elSeconds = $('.seconds', elTimeCounter);

        $('.num', elDays).html(days);
        $('.num', elHours).html(hrs);
        $('.num', elMinutes).html(min);
        $('.num', elSeconds).html(sec);

        setTimeout(countDown, 1000);
    }
    function gradient() {
        let granimInstance = new Granim({
            element: '#granim',
            direction: 'radial',
            isPausedWhenNotInView: true,
            states : {
                "default-state": {
                    gradients: [
                        ['#FCCF31', '#F55555'],
                        ['#97ABFF', '#123597'],
                        ['#0E5CAD', '#79F1A4']
                    ]
                }
            }
        });
    }
    countDown();
    gradient();
});
