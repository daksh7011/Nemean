/*
 * Open Source Project made by Daksh (daksh7011.com)
 * Do NOT remove this excerpt even if you fork this or use it by any means.
 * This project is Licenced under GNU GENERAL PUBLIC LICENSE Version 3
 *
 */

"use strict"
$(window).on("load", function() {
    function countDown() {
        var today = new Date();
        var comingsoonDate = new Date("December 31,2018 23:59:58");
        var currentTime = today.getTime();
        var countdownTime = comingsoonDate.getTime();
        var actualTime = countdownTime - currentTime;

        var sec = Math.floor(actualTime / 1000);
        var min = Math.floor(sec / 60);
        var hrs = Math.floor(min / 60);
        var days = Math.floor(hrs / 24);

        hrs %= 24;
        min %= 60;
        sec %= 60;

        days = (days < 10) ? "0" + days : days;
        hrs = (hrs < 10) ? "0" + hrs : hrs;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        var elTimeCounter = $('.time-counter');
        var elDays = $('.days', elTimeCounter);
        var elHours = $('.hours', elTimeCounter);
        var elMinutes = $('.minutes', elTimeCounter);
        var elSeconds = $('.seconds', elTimeCounter);

        $('.num', elDays).html(days);
        $('.num', elHours).html(hrs);
        $('.num', elMinutes).html(min);
        $('.num', elSeconds).html(sec);

        setTimeout(countDown, 10000);
    }
});
