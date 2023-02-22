var randomN = Math.floor(Math.random()*50)+1;
var guess = document.querySelector(".guess");
var submit = document.querySelector(".submit");
var guesses = document.querySelector(".guesses");
var chances = document.querySelector(".chances");
var lastres = document.querySelector(".lastres");
var loworhigh = document.querySelector(".loworhigh");
var guesscount = 1;
var resetbtn;
function check(){
    var userguess = Number(guess.value);
    if(guesscount === 1){
        guesses.textContent = "pre guesses : ";
        chances.textContent = "";
    }
    guesses.textContent += userguess + " _ "
    chances.textContent = "chances left : " + (15-guesscount);

    if(userguess === randomN){
        lastres.textContent = "You win!";
        lastres.style.backgroundColor = "lightgreen;"
        loworhigh.textContent = "";
        gameEnd()
    }
}
submit.addEventListener("click",check);