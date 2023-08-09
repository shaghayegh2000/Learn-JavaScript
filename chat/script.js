let msg = document.getElementById("msg");
let btn = document.getElementById("btn");
let messages = document.getElementById("massages");

btn.disabled = true;
btn.addEventListener('click', function () {
    let message = document.createElement("li");
    message.innerHTML = msg.value;
    messages.appendChild(message);
    msg.value = "";
    btn.disabled = true;
})
msg.addEventListener('keyup', () => {
    if (msg.value.length > 0) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
});
