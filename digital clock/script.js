var date = new Date();
const todayDate = document.querySelector('.date');
const todayDay = document.querySelector('.day');
const todayTime = document.querySelector('.time');
const noofday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function printDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    todayDate.innerHTML = day+"/"+month+"/"+year;
}  
printDate();

function printDay() {
    var date = new Date();
    var today = date.getDay();
    var day = noofday[today];
    todayDay.innerHTML = day;
}
printDay();

function printTime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var seconds = date.getSeconds();
    var period = "AM";
    if(hour == 0){
        hour = 12;
    }
    else{
        period = "PM";
    if(hour>12){
        hour = hour - 12;
    }
    }
    if(min < 10){
        min = "0"+min;
    }
    if(seconds < 10){
        seconds = "0"+seconds; 
    }
    var time = hour + ":" + min + ":" + seconds + " " + period;
    document.querySelector(".time").innerHTML = time;
    setTimeout(printTime, 1000);
}
printTime();