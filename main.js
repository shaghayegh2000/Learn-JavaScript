// document.querySelector("button").onclick = function(){
//     alert("clickd!");
// }

// var btn = document.querySelector("button");
// btn.onclick = function() {
//     alert('clicked');
// }

// let myImage = document.querySelector("img");
// let test = document.getElementById("test");
// test.onclick = function(){
//     let mySrc = myImage.getAttribute("src");
//     if(mySrc=="images/sta-je-html.jpg"){
//         myImage.setAttribute("src" , "images/sta-je-css.png");
//     }
//     if(mySrc=="images/sta-je-css.png"){
//         myImage.setAttribute("src" , "images/front.jpg");
//     }
//     if(mySrc=="images/front.jpg"){
//         myImage.setAttribute("src" , "images/sta-je-html.jpg");
//     }
// }




// let learn = document.querySelector("h1");
// learn.textContent = "well done!";
// learn.onclick = function tst(){
//      learn.style.color = "green";
// }

// var text = "Returning Customer?";
// var text2 = "Click here to login";
// var text3 = " New Customer?";
// var text4 = "Register here";
// var result = text+ "  " +text2.link("#")+" "+text3+ "  " +text4.link("#");
// document.querySelector(".linkk").innerHTML = result;

// let text = "I am learning";
// let text2 = "javascript";
// let result = text+" " +text2.link('#');
// document.querySelector(".linkk").innerHTML = result;

// let number = -37.57
// let number2 = 4.56
// document.write(Math.abs(number));
// document.write("<br>")
// document.write(Math.max(number2,2));
// document.write("<br>")
// document.write(Math.round(number));
// document.write("<br>")
// document.write(Math.ceil(number));
// document.write("<br>")
// document.write(Math.floor(number));
// document.write("<br>")
// document.write(Math.pow(number2,2));
// document.write("<br>")
// document.write(Math.sqrt(number2,2));
// document.write("<br>")
// document.write(Math.round(Math.random()*50));




// let pcontent = document.querySelectorAll("p");
// pcontent[0].innerHTML = "Hello, This is first paragraph";

// let links = document.getElementsByTagName("a");
// links[1].textContent = "link changed!"

// let title = document.getElementById("title");
// title.style.color = "darkgreen";
// title.style.backgroundColor = "lightgreen";

// let btn = document.createElement("button");
// btn.innerHTML = "click me!";
// document.getElementsByTagName("div")[0].appendChild(btn);

// let list = document.getElementsByTagName("ul")[0];
// let Item2 = document.getElementById("milk");
// list.removeChild(Item2);




// let image = document.getElementById("img");
// image.addEventListener("mouseover" , func1 );
// image.addEventListener("mouseout" , func2 );
// function func1(){
//     this.style.width = "16%";
// }
// function func2(){
//     this.style.width = "15%";
// }



// var movie = {
//     title : "sfhl dkfhdkf",
//     releaseDate : "2015",
//     duration : "2h",
//     actors :[{
//         name : "iodfhesfihs",
//         birth : "94847"
//     },
//     {
//       name : "kfjsesd", 
//       birth : "18947"
//     }
// ]}
// document.write(movie.actors[0].birth);


// let pass ="admin1234";
// let guess;
// let error = false;
// let counter = 0;
// while(guess!=pass && error==false){
//     if(counter<=5){
//         guess = prompt("password");
//         counter++;
//     }else{
//         alert("you can login after 2 hours");
//         error = true;
//     }
// }


// var friends = ["Mina" , "Ali" , "Mary"];
// for(var i=0; i<friends.length; i++){
//     document.write(friends[i]+" ");
// }


// var friends = ["hikfse" , "wefhio" , "efhiwo"];
// friends.forEach(func);
// function func(x){
//     document.write(x + "<br>");
// }


// let test = document.getElementById("test");
// test.addEventListener("click" , fun);
// function fun(){
//     setTimeout(function(){alert("welcome!")},200);
//     setInterval(function(){alert("done!")},2000)
// }


// let textinput = document.getElementById("textinput");
// let btn = document.getElementById("test");
// function storage(){
//     localStorage.name = textinput.value;
// }
// btn.addEventListener("click" , storage);
// document.write("Hello" + " " + localStorage.name);
// // or another way
// function storage() {
//     localStorage.setItem("name" , textinput.value)
// }
// document.write("Hello" + " " + localStorage.getItem("name"));

// debugger;
// debbuging learning finished


// if(confirm("are you female?")){
//     alert("welcome");
// }else{
//     alert("you can not login!");
// }
// let prev = document.getElementById("prev");
// let next = document.getElementById("next");
// prev.onclick = function () {
//     window.history.back();
// }
// next.onclick = function() {
//     window.history.next();
// }


// let title = document.getElementById("title");
// alert(title.parentNode.nodeName);
// let cont = document.getElementById("cont");
// alert(cont.firstChild.innerHTML);
// alert(cont.lastChild.innerHTML);
// alert(cont.childNodes[3].innerHTML);
// document.write(title.firstChild.nodeValue);
// let parag = document.createElement("p");
// let textt = document.createTextNode("I am new!");
// parag.appendChild(textt);
// // document.body.appendChild(parag);
// cont.insertBefore(parag,cont.childNodes[0]);
// cont.childNodes[0].remove();
// cont.replaceChild(parag,cont.childNodes[1]);


// let a = document.createElement("a");
// let lin = document.createTextNode("I am link!");
// a.appendChild(lin);
// cont.insertBefore(a,cont.childNodes[1]);


// var person = "Amir",
// carName = "Volvo",
// price = 200;
// alert(price);
// price = 300;
// var x = "hello";
// var x = "hey";
// x = "bye";
// alert(x);
// let y = 1;
// let y = 2;
// y = 2;
// alert(y);

// function alertIt()
// {
//     alert(person);
// }
// alertIt();
// {
//   let x = 2;
//   alert(x);
// }
// let x = 3;
// alert(x);

// {
//     var y = 4;
//     alert(y)
// }
//   alert(y);
// var x = 10;
// {
//     var x = 2;
// }
// alert(x);
  
  
// let y = 10;
// {
//     let y = 2;
// }
// alert(y);

// const PI = 3.141592658888;

// const PI;
// PI = 3.141592658888;


// PI = 3.14;
// PI = PI+10;
// PI += 10;

// let x = 2;
// alert(2*PI);

// const cars  = ["Saab", "Volvo", "BMW"];

// cars[0] = "Toyota";

// alert(cars[0]);

// cars.push("Audi");

// document.write(cars);

// const car = {type: "Fiat", model:"500", color:"white"};

// car.color = "red";

// car.owner = "Amir";

// car = {type: "Audi", model:"1500", color:"red"};

// function loadd(){
//     alert("It is loading");
// }
// document.getElementById("textinput").focus();
// function change(){
//     alert("changed");
// }
// function mouseoverit(el){
//     el.innerHTML="clik me!"
// }
// function mouseoutit(el){
//     el.innerHTML="Mouse over me!"
// }
// function moused(el){
//     el.style.backgroundColor = "yellow";
// }
// function mouseup(el){
//     el.style.backgroundColor = "aquamarine";
// }


// let text;
// for(i=0; i<=10; i++)
// {
//     if (i===7) {
//         break;
//     }
//     text = "number is " + i + "<br>";
//     document.write(text);
// }
// document.write("<hr>")
// for(i=0; i<=10; i++)
// {
//     if (i===7) {
//         continue;
//     }
//     text = "number is " + i + "<br>";
//     document.write(text);
// }


// setInterval(() => {
//     document.getElementsByTagName("h1")[0].innerHTML = new Date(2015,3,25);
// }, 100);













// var text = "Returning Customer?";
// var text2 = "Click here to login";
// var text3 = " New Customer?";
// var text4 = "Register here";
// var result = text+ "  " +text2.link("https://www.homaygift.com/my-account")+"<br>"+text3+ " " +text4.link("https://www.homaygift.com/my-account/");
// document.querySelector(".woocommerce-info").innerHTML = result;
