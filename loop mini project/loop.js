var questions = [
    {
        prompt : "what color is apple?\n(a)red\n(b)black\n(c)blue",
        answer : "a"
    },
    {
        prompt : "what color is banana?\n(a)red\n(b)black\n(c)tellow",
        answer : "c"    
    },
    {
        prompt : "what color is stawberry?\n(a)black\n(b)red\n(c)tellow",
        answer : "b"    
    }
];
var score = 0;

for(var i=0; i<questions.length; i++){
    let ask = prompt(questions[i].prompt);
    if(ask==questions[i].answer){
        score++;
        alert("CORRECT!");
    }else{
        alert("WRONG!");
    }
}
document.write("you got" + " " + score + "out of" + " " + questions.length);