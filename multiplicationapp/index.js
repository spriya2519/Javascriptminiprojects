// to create random number
const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)
//ceil to get interger only
const questionE1 = document.getElementById("question");

const formE1 = document.getElementById("form")
const inputE1 = document.getElementById("input")
const scoreE1 = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));
// JSON.parse to get number in int value

if(!score){
    score = 0;
}

//this if we add score to 0 then even if we answer 2 questions correct the answer would be 1 so we fetch score value using local storage

// let score = 0;

questionE1.innerText = `What is ${num1} multiply by ${num2}? `

//answer
const correctAns = num1 * num2;

formE1.addEventListener("submit", () => {
    // +inputE1 adding + infront of varbiable it will be integer value
    const userAns = +inputE1.value
    if (userAns === correctAns) {
        score++;
        updateLocalStorage()
    } else {
        score--;
        updateLocalStorage()
    }



})

// every time we do submit the score value is getting change so save the score value in local storage
scoreE1.innerText =`score:${score}`
function updateLocalStorage(){
    // setItem to store value
    //it accepts only string value
    // JSON.stringify(score) to get score in string
    localStorage.setItem("score",JSON.stringify(score))
}