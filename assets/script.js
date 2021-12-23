
// WHEN I click the start button
let quizButton = document.getElementById("quizbutton");
let timerInterval;
let score = 0;
let userChoice;
let choice1 = document.getElementById("answera");
let choice2 = document.getElementById("answerb");
let choice3 = document.getElementById("answerc");
let choice4 = document.getElementById("answerd");
let i = 0
quizButton.addEventListener("click", startQuiz);
// choice1.addEventListener("click", userChoice=choice1.value);
console.log(userChoice)
// choice2.addEventListener("click", userChoice=choice2);
// choice3.addEventListener("click", userChoice=choice3);
// choice4.addEventListener("click", userChoice=choice4); 

choice1.addEventListener("click", function(){
    userChoice = choice1;
    questionCycle(); })
choice2.addEventListener("click", questionCycle); 
choice3.addEventListener("click", questionCycle); 
choice4.addEventListener("click", questionCycle); 
 

// THEN a timer starts and I am presented with a question
function startQuiz(){
    console.log("this worked")
    
    timer();
    showQuestions();

}

function questionCycle(){
        if (userChoice === quizQuestions[i].answer){
            score++;
            console.log(score);
            console.log(userChoice);
            i++;
            userChoice = null;
            if(i < quizQuestions.length){ showQuestions()};

        }
        else{
            score--;
            console.log(score);
            console.log(userChoice);
            console.log(quizQuestions[i].answer);
            timerInterval = timerInterval - 10;
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
// while(i< quizQuestions.length);



function timer(){
    let seconds = 60;
    timerInterval = setInterval(function(){
        document.getElementById("quiz-timer").innerHTML="00:"+seconds;
        seconds--;
        if(seconds === 0){
            clearInterval(timer);
        }
    }, 1000);
}
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
