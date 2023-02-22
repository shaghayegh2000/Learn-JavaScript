//Grabbing elements
let msg = document.getElementById("msg");
let btn = document.getElementById("btn");
let messages = document.getElementById("messages");
//Even Listener
btn.addEventListener("click" , function(){
    // alert(msg.value);
    let message = document.createElement("li");
    message.innerHTML = msg.value;
    messages.appendChild(message);
    msg.value = "";
})