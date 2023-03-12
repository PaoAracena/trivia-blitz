window.onload = () => {
    let rightAnswers = document.getElementsByClassName("right-answer")
    let wrongAnswers = document.getElementsByClassName("wrong-answer")
    // rightAnswers.onclick = rightAnswerClick
    // wrongAnswers.onclick = wrongAnswerClick
    for (const rightAnswer of rightAnswers ) {
        rightAnswer.onclick = rightAnswerClick
    }
    for (const wrongAnswer of wrongAnswers) {
        wrongAnswer.onclick = wrongAnswerClick
    }
    console.log("right answer")
}
let rightAnswerClick = (event) => {
    event.target.classList.add("green")
}

let wrongAnswerClick = (event) => {
    event.target.classList.add("red")
}

const element = document.querySelector(".answer-Box");

element.addEventListener("mouseover", event => {
  console.log("Mouse in");
});
element.addEventListener("mouseout", event => {
    console.log("Mouse out");
  });