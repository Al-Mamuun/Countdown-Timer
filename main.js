// Set the target date with UTC+6 offset for Bangladesh time
var targetDate = new Date('Feb 16, 2024 00:00:00 GMT+0600').getTime();

function newYear(){
    var current = new Date().getTime();
    difference = targetDate - current;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(difference / (day));
    var h = Math.floor((difference % (day)) / (hour));
    var m = Math.floor((difference % (hour)) / (minute));
    var s = Math.floor((difference % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}
setInterval(function(){
    newYear();
}, 1000);
