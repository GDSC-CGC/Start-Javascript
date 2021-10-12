let showText = document.getElementById('text')
let showtime= document.getElementById('showTime');

showText.innerHTML="Current Time: ";
function clock(){
    let time = new Date();
    let localTime = time.toLocaleTimeString();
    showtime.innerHTML = localTime;
}
setInterval(clock, 1000);

