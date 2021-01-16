var mainContainer = document.querySelector("#main-content");

var questions = [
    {
        question: "Inside which Html element do we put the Javascript?",
        answerA: "<javascript>",
        answerB: "<js>",
        answerC: "<script>",
        answerD: "<scripting>"
    }
];

var createLandingPage = function () {

    var titleEl = document.createElement("h2");
    titleEl.className = "title";
    titleEl.textContent = "Coding Quiz Challenge";

    var instructionsEl = document.createElement("p");
    instructionsEl.className = "instructions";
    instructionsEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time  by ten seconds!";

    var startButtonEl = document.createElement("button");
    startButtonEl.className = "start-btn";
    startButtonEl.textContent = "Start Quiz";
    
    mainContainer.append(titleEl, instructionsEl, startButtonEl);

};

var getQuestions = function() {
    document.querySelector("question").textContent = question
};


var startQuiz = function() {
    let time = 75;
    var targetEl = event.target;

    if (targetEl.matches(".start-btn")) {
        let myTimer = setInterval(function() {
            if (time > 0 && questions.length > 0) {
                var timeEl = document.querySelector("#time");
                timeEl.textContent = "Time: " + time;
                time--;
            } else {
                clearInterval(myTimer);
            }
        }, 1000);
    }
};
    

var quizRunThrough = function () {
    createLandingPage();
    mainContainer.addEventListener("click", startQuiz);
    
};

quizRunThrough();


