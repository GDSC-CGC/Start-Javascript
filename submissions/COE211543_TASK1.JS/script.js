//javascript code to get the current time ... 
let date = document.getElementById("clock");
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);