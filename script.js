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

let myBtn = document.getElementById("btn2");
let myBtn2 = document.getElementById("btn1");
let myImg = document.querySelector("img");
myBtn.onclick = function () {
    let mySrc =  myImg.getAttribute("src");
    if (mySrc == "imgs/sta-je-html.jpg"){
        myImg.setAttribute("src" , "imgs/sta-je-css.png");
    }
    if (mySrc == "imgs/sta-je-css.png"){
        myImg.setAttribute("src" , "imgs/front.jpg");
    }
    if (mySrc == "imgs/front.jpg"){
        myImg.setAttribute("src" , "imgs/sta-je-html.jpg");
    }
}
myBtn2.onclick = function () {
    let mySrc =  myImg.getAttribute("src");
    if (mySrc == "imgs/sta-je-html.jpg"){
        myImg.setAttribute("src" , "imgs/front.jpg");
    }
    if (mySrc == "imgs/sta-je-css.png"){
        myImg.setAttribute("src" , "imgs/sta-je-html.jpg");
    }
    if (mySrc == "imgs/front.jpg"){
        myImg.setAttribute("src" , "imgs/sta-je-css.png");
    }
}