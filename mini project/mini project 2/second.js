var randomN = Math.floor(Math.random()*100)+1;
var guess = document.querySelector(".guess");
var submit = document.querySelector(".submit");
var guesses = document.querySelector(".guesses");
var chances = document.querySelector(".chances");
var lastres = document.querySelector(".lastres");
var loworhigh = document.querySelector(".loworhigh");
var guesscount = 1;
var resetbtn;
guess.focus();

function check(){
    var userguess = Number(guess.value);
    if(guesscount === 1){
        guesses.textContent = "pre guesses : ";
        chances.textContent = "";
    }
    guesses.textContent += userguess + " _ "
    chances.textContent = "chances left : " + (10-guesscount);

    if(userguess === randomN){
        lastres.textContent = "!You win!";
        lastres.style.backgroundColor = "lightgreen";
        loworhigh.textContent = "";
        gameEnd()
    }else if(guesscount === 10){
        lastres.textContent = "!Game over!";
        lastres.style.backgroundColor = "red";
        loworhigh.textContent = "";
        alert("The number was : " + randomN);
        gameEnd()
    }else{
        lastres.textContent = "! Wrong !";
        lastres.style.backgroundColor = "orange";
        if(userguess<randomN){
        loworhigh.textContent = "Your guess was low!";
        }else if(userguess>randomN){
            loworhigh.textContent = "Your guess was high!";
        }
    }
    guesscount++;
    guess.value = "";
    guess.focus();
}

submit.addEventListener("click",check);
function gameEnd(){
    guess.disabled = true;
    submit.disabled = true;
    resetbtn = document.createElement("button");
    resetbtn.textContent = "Start new game!";
    document.getElementById("result").appendChild(resetbtn);
    resetbtn.addEventListener("click",resetGame);
    randomN = Math.floor(Math.random()*100)+1;
}

function resetGame(){
    guesscount = 1;
    var result = document.querySelectorAll(".result p");
    for (let i = 0; i < result.length; i++) {
        result[i].textContent = "";
    }
    guess.focus();
    resetbtn.parentNode.removeChild(resetbtn);
    submit.disabled = false;
    guess.disabled = false;
    guess.value = "";
    lastres.style.backgroundColor = "White";
}
