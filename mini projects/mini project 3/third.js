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
    if(blockleft<61 && blockleft>0 && chartop>245){
        block.style.animation = "none";
        alert("!Game Over! Score : "+ Math.floor(counter/200));
        counter = 0;
        block.style.animation = "block 2s infinite linear"
    }else{
        counter++;
        score.innerHTML = Math.floor(counter/200);
    }
}, 10);