// alert("Welcome to the course!");
// var User = "amir";
// var user = "shagha";
// var User = "ali";
// document.write(User);
// document.write("<br>");

// //+ , - , * , / , = , === , !== , == , !=
// // let myNum = 30+5;
// // let myNum = 30-5;
// // let myNum = 30*5;
// // let myNum = 30/5;
// let myNum = 20;
// let myNum2 = myNum+9;
// let result = myNum === 20;

// let str = "Amir"+" Hosein";
// let num = "10" + '5';

// let res = "10";

// alert(typeof str);
// alert(res!==10);

// var Show = () => {
//     document.write("This Is Func!");
// }
// Show();

// var infos = new Array("shagha" , "mohamadi" , 23 , null , "");
// document.write( "the type is : " + typeof infos[2] + "<br>");
// document.write(infos.sort());

// var x = 10;
// var y = 5;
// y--;
// y += 1
// var myEl = document.getElementById("result");
// // myEl.innerText = x * y;
// var age1 = "18.2";
// var age2 = 23;
// age1 = Number(parseInt(age1));
// myEl.innerHTML = age1+age2;

// var test = (a,b,c) => {
//     document.write(a+b+c);
//     document.write("<br>");
// }
// test(1,2,3);

// var myObj = {
//     name : "shaghayegh",
//     family : "mohamadi",
//     age : "23",
//     gender : "female"
// }
// document.write(myObj.gender + " " + myObj.family);

// function eve() {
//     myEl.innerHTML = "you clicked here!"
// }
// var myEl = document.getElementById("h3");

// function chg () {
//     var num = document.getElementById("input").value;
//     var sub = document.getElementById("submit");
//     if (num>18) {
//         alert("welcome");
//     }else {
//         sub.disabled = true;
//         sub.disabled = false;
//     }
// }

// var date = new Date();
// document.write(date.toTimeString() + "<br>");
// document.write(date.toDateString() + "<br>");
// document.write(date.getDay() + "<br>");
// switch (new Date().getDay()) {
//     case 0: {
//         document.write("saturday");
//     }
//     case 1: {
//         document.write("sunday");
//     }
//     case 2: {
//         document.write("monday");
//     }
//     case 3: {
//         document.write("tuesday");
//     }
//     case 4: {
//         document.write("wednesday");
//     }
//     case 5: {
//         document.write("thursday");
//     }
//     case 6: {
//         document.write("friday");
//     }

// }

// var arr = ["amir", "jjeofe", "23", "ailjdl"];
// var txt = "";
// // for (let i = 0; i < arr.length; i++) {
// //     txt += arr[i] + "<br>";
// // }
// // document.write(txt);
// for (x in arr) {
//     myEl.innerText += arr[x];
// }

// try {
//     alert(x());
// } catch(err) {
//     document.write(err.message);
// }finally {
//     document.write("<br>" + "call support")
// }

// document.querySelector("button").onclick = function () {
//     document.querySelector("button").innerHTML = "You Clicked";
// }
// document.querySelector("button").onmouseleave = function () {
//     document.querySelector("button").innerHTML = "click here";
// }

// let myBtn = document.getElementById("btn2");
// let myBtn2 = document.getElementById("btn1");
// let myImg = document.querySelector("img");
// myBtn.onclick = function () {
//     let mySrc =  myImg.getAttribute("src");
//     if (mySrc == "imgs/sta-je-html.jpg"){
//         myImg.setAttribute("src" , "imgs/sta-je-css.png");
//     }
//     if (mySrc == "imgs/sta-je-css.png"){
//         myImg.setAttribute("src" , "imgs/front.jpg");
//     }
//     if (mySrc == "imgs/front.jpg"){
//         myImg.setAttribute("src" , "imgs/sta-je-html.jpg");
//     }
// }
// myBtn2.onclick = function () {
//     let mySrc =  myImg.getAttribute("src");
//     if (mySrc == "imgs/sta-je-html.jpg"){
//         myImg.setAttribute("src" , "imgs/front.jpg");
//     }
//     if (mySrc == "imgs/sta-je-css.png"){
//         myImg.setAttribute("src" , "imgs/sta-je-html.jpg");
//     }
//     if (mySrc == "imgs/front.jpg"){
//         myImg.setAttribute("src" , "imgs/sta-je-css.png");
//     }
// }

// let welcome = document.querySelector("h1");
// let userName = prompt("What is your name?");
// welcome.innerText = "Hello " + userName;
// if (userName == " ") {
//     welcome.innerText = "Hello User";
// }
// if (!userName) {
//     welcome.innerText = "Hello User";
// }
// if (userName == null) {
//     welcome.innerText = "Hello User";
// }

// let ask1 = prompt("enter a number");
// let ask2 = prompt("enter a number");
// document.write(Number(ask1) + Number(ask2));

// var h1 = document.getElementsByTagName("h1");
// h1[0].style.backgroundColor = "yellow";

// var btn = document.createElement("button");
// btn.innerHTML = "Click Me!";
// document.querySelector("div").appendChild(btn);

// let list = document.getElementsByTagName("ul")[0];
// let listItem2 = document.getElementsByTagName("li")[1];
// // list.removeChild(listItem2);

// let newI = document.createElement("li");
// newI.innerHTML = "new"
// list.replaceChild(newI , listItem2);

// let chrom = document.getElementById("chrome");
// let btn = document.querySelector("button");
// btn.addEventListener('click', function () {
//     chrom.style.width = "200px";
//     chrom.style.height = "200px";
// })

// let friends = ["dsdg" , "wtety" , "nxvxmz"];
// for (let i = 0; i < friends.length; i++) {
//     document.write(friends[i] + "<br>")
// }
// friends.forEach( function (x , i) {
//     document.write( i + " : " + x + "<br>");
// });

// let btn = document.querySelector("button");
// btn.addEventListener('click', function(){
//     setTimeout(() => {
//         let par = document.createElement("p");
//         par.innerHTML = "3 seconds";
//         document.body.appendChild(par);
//     }, 3000);
//     // setInterval(() => {
//     //     let par = document.createElement("p");
//     //     par.innerHTML = "3 seconds";
//     //     document.body.appendChild(par);
//     // }, 3000);
// })


// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// // btn.addEventListener('click', function(){
// //     localStorage.name = input.value;
// //     document.write(localStorage.name);
// // })
// // document.write(localStorage.name);

// btn.addEventListener('click', function(){
//     localStorage.setItem("name" , input.value);
// })
// document.write(localStorage.name);

// let btn = document.querySelector("button");
// btn.addEventListener('click', function () {
//     document.write(window.innerWidth);
// })
// window.onresize = function () {
//     // btn.innerText = window.innerWidth;
//     btn.innerText = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// }
// document.write(screen.width + "<br>");
// document.write(screen.height + "<br>");
// document.write(window.location.href + "<br>");
// document.write(window.location.hostname + "<br>");
// document.write(window.location.pathname + "<br>");
// document.write(window.location.protocol + "<br>");

let open = document.getElementById("open");
let close = document.getElementById("close");
let assign = document.getElementById("assign");

let newWin;

open.addEventListener('click', function () {
    newWin = window.open("https://github.com/");
})
close.addEventListener('click', function () {
    newWin.close();
})

assign.onclick = function(){
    window.location.assign("https://github.com/");
}






















