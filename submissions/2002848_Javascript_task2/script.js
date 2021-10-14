// Initialising variables

let num = parseInt(Math.random()*10);
let number = document.getElementById('number');
let result = document.getElementById('result');
let winAudio = new Audio('sound/win.mp3');
let loseAudio = new Audio('sound/lose.mp3');
let reset = document.getElementById('reset');
let lives = document.getElementById('lives');
let sparkel = document.getElementById('sparkel');

let index = 3;
let win = 0;

// To resart the game
reset.addEventListener('click' ,()=>{
    index = 3;
    num = parseInt(Math.random()*10);
    result.innerText = '';
    number.innerText = '';
    button.style.display = 'inline-block'
    lives.innerText = `${index}`;
    sparkel.style.display = 'none';
})


// To listen Submit Button
let button = document.getElementById('submit');
button.addEventListener('click',()=>{

    if(index>0){
        if(number.value.length!=0){

            if(number.value == num){
                
                sparkel.style.display = 'inline-block';
                result.innerText = `Congratulations You Won`;
                result.style.color = 'aqua';
                winAudio.play();
                button.style.display = 'none';
            } 
            else{
                result.innerText = `Wrong Guess !! Try Again`;
                result.style.color = 'red';
                index--;
                lives.innerText = `${index}`;
            }
        }
        else{
            alert("Please make a guess first !")
        }
    }

    // If index is 0 then lose
    if(index<=0){
        win==0;
        result.innerText = `OOPS You Loss`;
        button.style.display = 'none';
        loseAudio.play();
    }
    number.value = '';

})



