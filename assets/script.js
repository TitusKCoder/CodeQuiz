
// WHEN I click the start button (COMPLETE)
let quizButton = document.getElementById("quizbutton");
let timerInterval;
let score = 0;
let userChoice;
let choice1 = document.getElementById("answera");
let choice2 = document.getElementById("answerb");
let choice3 = document.getElementById("answerc");
let choice4 = document.getElementById("answerd");
let i = 0
let seconds = 5;
let pn = document.getElementById("player-name");
let sn = document.getElementById("player-score");
let resetScoresBtn = document.getElementById("reset-score");
let asnwerCheck = document.getElementById("answer-check");


quizButton.addEventListener("click", startQuiz);


choice1.addEventListener("click", function(){
    userChoice = choice1.innerHTML;
    questionCycle(); })
choice2.addEventListener("click",function(){
    userChoice = choice2.innerHTML;
    questionCycle();
} ); 
choice3.addEventListener("click", function(){
    userChoice = choice3.innerHTML;
    questionCycle();
} ); 
choice4.addEventListener("click", function(){
    userChoice = choice4.innerHTML;
    questionCycle();
}); 
 

// THEN a timer starts and I am presented with a question (COMPLETE)
function startQuiz(){
    // console.log("this worked")

    let quizbox = document.getElementById("question-box");

    asnwerCheck.innerHTML = ""
    quizbox.classList.toggle("hide")
    timer();
    showQuestions();
}



function questionCycle(){
    
        if (userChoice === quizQuestions[i].answer){
            score++;
            // console.log(score);
            // console.log(userChoice);
            i++;
            asnwerCheck.innerHTML = "Correct Answer!";
            userChoice = null;
            if(i < quizQuestions.length){ showQuestions()};

        }
        else{
            score--;
            if(seconds !== 0){seconds = seconds - 10};
            // ALERT HERE TO NOTIFY THAT THE ANSWER IS WRONG/TIME WAS DUCTED 
            // console.log(timerInterval);
            asnwerCheck.innerHTML = "Wrong answer. The correct answer is: " + quizQuestions[i].answer;
            i++;
            userChoice = null;
            if(i < quizQuestions.length){ showQuestions()};
        }
}

function showQuestions(){
    let questionPrompt = document.getElementById("question-prompt");
   
    questionPrompt.innerHTML = quizQuestions[i].question;

    choice1.innerHTML = quizQuestions[i].choices[0];
    choice2.innerHTML = quizQuestions[i].choices[1];
    choice3.innerHTML = quizQuestions[i].choices[2];
    choice4.innerHTML = quizQuestions[i].choices[3];
}

function clearquiz(){
let questionPrompt = document.getElementById("question-prompt");
let quizbox = document.getElementById("question-box");
quizbox.classList.toggle("hide");


questionPrompt.innerHTML = "";

choice1.innerHTML = "";
choice2.innerHTML = "";
choice3.innerHTML = "";
choice4.innerHTML = "";



i = 0; 
seconds = 5;
}



function timer(){
    
    timerInterval = setInterval(function(){
        document.getElementById("quiz-timer").innerHTML="Seconds left: " + seconds;
        seconds--;
        if(seconds < 0 || i === quizQuestions.length){
            clearInterval(timerInterval);
            takeScore();
            clearquiz(); 
            console.log("Game is over");
        }
    }, 1000);
}
// WHEN I answer a question
// THEN I am presented with another question (COMPLETE)
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock (COMPLETE)
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over (COMPLETE)
// WHEN the game is over
// THEN I can save my initials and my score
let playerName;
let playerScore;
function takeScore(){
    playerName = prompt("Please input your initials");
    playerScore = score;
    score = 0;
    console.log(playerName + " scored " + playerScore);
    localStorage.setItem('playerName', playerName);
    localStorage.setItem('playerScore', playerScore);
    setScore();
}

function setScore(){

let scorebox = document.getElementById("score-box")
let list = document.createElement("li");


document.getElementById("score-list").appendChild(list);

list.innerHTML = " Player Name: " + localStorage.getItem("playerName") + " Score: " + localStorage.getItem("playerScore");
console.log(list)

pn.innerHTML = "Current Player: " + localStorage.getItem("playerName");
sn.innerHTML = "Player Score: " + localStorage.getItem("playerScore");

scorebox.classList.remove("hide");

}

function resetScores(){
    let scoreList = document.getElementById("score-list");
    let scorebox = document.getElementById("score-box");

    while (scoreList.firstChild) {
        scoreList.removeChild(scoreList.firstChild);
    }

    scorebox.classList.add("hide");

}

resetScoresBtn.addEventListener('click', resetScores);
