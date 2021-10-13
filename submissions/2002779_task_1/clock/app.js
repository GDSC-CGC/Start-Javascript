// const seconds = document.querySelector('#seconds');
// seconds.addEventListener('click', function() {
//     while(seconds.textContent!==59)
//         seconds.textContent++;

// })

let simpleClock = () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";
    if (hour == 0) {
        hour = 12;
    } else if (hour >= 12) {
        hour = hour - 12;
        period = "PM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = `Current time is  ${hour}:${minutes}:${seconds} ${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(simpleClock, 1000);
};

simpleClock();