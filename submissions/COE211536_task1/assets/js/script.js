function time(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var dayTime = "AM";
    if(h > 12){
        h = h-12;
        dayTime="PM"
    }
    var time = h+":"+m+":"+s+" "+dayTime;
    
    document.getElementById("clock").innerText = time;
}
setInterval(time,1000);
time();