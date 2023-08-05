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

function eve() {
    myEl.innerHTML = "you clicked here!"
}
var myEl = document.getElementById("h3");

function chg () {
    var num = document.getElementById("input").value;
    var sub = document.getElementById("submit");
    if (num>18) {
        alert("welcome");
    }else {
        sub.disabled = true;
        sub.disabled = false;
    }
}


