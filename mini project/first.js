let msg = document.getElementById("msg");
let btn = document.getElementById("btn"); 
let massage = document.getElementById("massages")
btn.addEventListener("click" , function(){
  let massage = document.createElement("li");
  massage.innerHTML = msg.value;
  massage.appendChild(massage);
  msg.value = "";
})
