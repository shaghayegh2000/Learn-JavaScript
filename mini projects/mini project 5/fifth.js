var second = 0;
var tens = 0;
var getseconds = document.getElementById("seconds");
var getTens = document.getElementById("tens");
var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var btnReset = document.getElementById("btn-reset");
var continu = document.createElement("button");
var Interval;
var minute;
var mincont;
var minut;

btnStart.onclick = function(){
    clearInterval(Interval);
    clearInterval(minute);
    Interval = setInterval(startTime , 1000);
    minute = setInterval(minutes , 60000);
}
btnStop.onclick = function(){
    clearInterval(Interval);
    clearInterval(minute);
    this.parentNode.appendChild(continu);
    this.parentNode.replaceChild(continu , btnStop);
    continu.textContent = "Continue"
}
btnReset.onclick = function(){
    clearInterval(Interval);
    clearInterval(minute);
    tens = "00";
    second = "00";
    getTens.innerHTML = tens;
    getseconds.innerHTML = second;
}
function startTime(){
    tens++;
    getTens.innerHTML = tens;
    if(tens<=9){
        getTens.innerHTML = "0" + tens;
    }
}
function minutes(){
    second++;
    tens = "00";
    getseconds.innerHTML = "0" + second;
    if(second<=9){
        getseconds.innerHTML = "0" + second;
    }
}
function minutess(){
    second++;
    tens = "00";
    getseconds.innerHTML = "0" + second;
    if(second<=9){
        getseconds.innerHTML = "0" + second;
    }
}

continu.onclick = function(){
    continu.textContent = "Stop";
    Interval = setInterval(startTime , 1000);
    mincont = setInterval(minutes , 60000-(tens*1000));
    clearInterval(mincont);
    minut = setInterval(minutess , 60000+(tens*1000));
    this.parentNode.appendChild(btnStop);
    this.parentNode.replaceChild(btnStop , continu);
}
























