function hourToMinute(hour) {
    var minute = hour * 60;
    return minute;
}

var hour = 5;
var minute = hourToMinute(hour);
console.log(hour, minute);
