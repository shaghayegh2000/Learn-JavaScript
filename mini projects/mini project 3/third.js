var character = document.getElementById("character");
var block = document.getElementById("block");
var score = document.getElementById("score");
var counter = 0;

function jump(){
    character.classList.add("animation");
    setTimeout(function() {
        character.classList.remove("animation");
    }, 700);
}

setInterval(function(){
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let chartop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(blockleft<65 && blockleft>50 && chartop>=179){
        alert("!Game Over!");
    }
}, 10);