totalLives = 3;
// randomNum = Math.random(Math.random()*11);
randomNum = Math.floor(Math.random() * 11);
function onLoadFunc(){
    document.getElementById("lives").innerText = totalLives;
    document.getElementById("mainHeading").innerText = "Guess the number!";
}
function reset(){
    totalLives=3;
    document.getElementById("lives").innerText = totalLives;
    document.getElementById("mainHeading").innerText = "Guess the number!";
}
function lives(){
    var num = document.getElementById("numberInput").value;
    if(totalLives >1){
        if(num==randomNum){
            document.getElementById("mainHeading").innerText = "You guessed the right! You won!";
        } else {
            document.getElementById("mainHeading").innerText = "You guessed incorrect! Try again!";
            totalLives--;
        }
    } else {
        document.getElementById("mainHeading").innerText = "You lost! The number was: "+randomNum;
    }

    document.getElementById("lives").innerText = totalLives;
}