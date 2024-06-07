const quizDatas = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "Donald Trump",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "1995",
    },
];

const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const question = document.querySelector('#question');
const submit = document.querySelector('#submit');
const answer = document.querySelectorAll('.answer');
const li = document.querySelectorAll('li');

let cuurenQuiz = 0;
// let mark = 0;

const loadQuiz = () => {
    const currentQuizData = quizDatas[cuurenQuiz];
    question.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    // console.log(quizDatas[cuurenQuiz].correct)

    cuurenQuiz++;

    answer.forEach(answer => {
        answer.checked = false;
    });
}

li.forEach(li => {
    li.addEventListener('click', () => {
        if (li.firstElementChild.checked) {
            if (li.lastElementChild.innerHTML == quizDatas[cuurenQuiz].correct) {
                console.log("true")
            } else {
                console.log('false');
            }
            // console.log(typeof li.lastElementChild.innerHTML)
        }
    })
});

loadQuiz();

submit.addEventListener('click', () => {

    cuurenQuiz < quizDatas.length ? loadQuiz() : alert("done");

})
