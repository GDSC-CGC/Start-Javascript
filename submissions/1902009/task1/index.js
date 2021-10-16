// Function to update/calculate time
function setDate(){
    let dateElement = document.querySelector('#date');

    // Getting date from date object
    let date  = new Date();

    // Getting hours,minutes and seconds seperately

    // Modulo 12 for 12 hour format
    let hours = date.getHours()%12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Combining hours,minutes and seconds
    date = (hours < 10 ? '0' + hours.toString() : hours.toString()) + ' : ' +  (minutes < 10 ? '0' + minutes.toString() : minutes.toString()) + ' : ' +  (seconds < 10 ? '0' + seconds.toString() : seconds.toString());
    console.log(date)
    dateElement.innerText = date;
}

// Calling setDate after an interval of 1 sec
setInterval(()=>setDate(),1000);