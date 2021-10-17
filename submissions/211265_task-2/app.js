// Dom elements
const inputNumber = document.getElementById('guessInput');
const submit = document.getElementById('guess-btn');
const show = document.getElementById('message');
const lives = document.getElementById('life');
const restart = document.getElementById('restart'); 

// adding event listeners

submit.addEventListener('click', match);
restart.addEventListener('click',restartGame);

// global variables
let life = 3;
let sound;
displayLives();

// match
function match(e) {
    let random = Math.floor((Math.random() * 10));
    life -= 1; 
    displayLives();
    lose();
    if(inputNumber.value === ""){
        alert("Please make a guess first !")
    } else if( random == inputNumber.value ){
        message("Congrats!! You have won the game.","green");
        sound = new Audio('win.mp3');
        sound.play();
    } else if (life <= 0 ){
     lose();
    }else{
        message("Wrong Guess !! Try Again","grey"); 
    }
    inputNumber.value = "";
    e.preventDefault();   
} 

// lose
function lose(){
    if(life <= 0){
    message("Sorry!! You have lost the game.","red");
        submit.disabled = true;
        submit.ariaDisabled;
        sound = new Audio('lose.mp3');
        sound.play();
    }
}

// message
function message(msg,color){
    show.innerHTML = `<h4 style="color: ${color};">${msg}</h4>`
}

// display lives

function displayLives(){
    lives.textContent = life;
}

// restart

function restartGame(){
    life = 3;
    submit.disabled = false;
    show.innerHTML = "";
    displayLives();
}