const data = [
    {
        id : 1,
        question : "Which planet is closest to the Sun?",
        answers : [
            {answer : "Venus" , isCorrect :false },
            {answer : "Earth" , isCorrect :false },
            {answer : "Mercury" , isCorrect :true },
            {answer : "Mars" , isCorrect :false }

        ],
    },
    {
        id : 2,
        question : "Who painted the Mona Lisa?",
        answers : [
            {answer : "Vincent van Gogh", isCorrect :false },
            {answer : "Leonardo da Vinci", isCorrect :true },
            {answer : "Pablo Picasso", isCorrect :false },
            {answer : "Michelangelo", isCorrect :false }

        ],
    },
    {
        id : 3,
        question : "What is the largest mammal on Earth?",
        answers : [
            {answer : "Elephant", isCorrect :false },
            {answer : "Blue whale", isCorrect :true },
            {answer : "Giraffe", isCorrect :false },
            {answer : "Hippopotamus", isCorrect :false }

        ],
    },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qInd = 0;
let correctAnswersCount = 0;
let wrongAnswersCount = 0;
let totalScore = 0;
let selectedAnswer;


const playAgain = () => {
    qInd = 0;
    correctAnswersCount = 0;
    wrongAnswersCount = 0;
    totalScore = 0;
    showQuestion(qInd);
}

play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block"; 
    playAgain();
});

const showResult = () => {
    gameScreen.style.display = "none"; 
    resultScreen.style.display = "block";

    resultScreen.querySelector(".correct").textContent = `Correct Answers : ${correctAnswersCount}`;
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers : ${wrongAnswersCount}`;
    resultScreen.querySelector(".score").textContent = `Total Score : ${(correctAnswersCount-wrongAnswersCount)*10}`;

};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e) => {
        selectedAnswer =  e.target.value;
      });
    });
  };
const showQuestion = (qNumber) =>{
    selectedAnswer = null;
    if(qInd === data.length){
        return showResult();
    }
    else{
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item,index) => 
        `<div class="answer">
              <input name = "answer" type="radio" id=${index} value="${item.isCorrect.toString()}"/>
              <label class = "options" for= ${index}>${item.answer}</label>
          </div> `
    ).join("");
    selectAnswer();
}
};



  const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if(selectedAnswer !== null){
            selectedAnswer === "true" ? correctAnswersCount++ : wrongAnswersCount++;
            qInd++;
            showQuestion(qInd);
        }else{
            alert("Please select an answer");
        }
    });
  
  };

  showQuestion(qInd);
  submitAnswer();

