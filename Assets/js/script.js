// glocal variables
var mainContainer = document.querySelector("#main-content");
var time = 75;
var i = 0;
var score = 0;
var highScoreIdCounter = 0;
var highScores = [];
var timer = setInterval(countdown, 1000);

// questions array
var questions = [
    {
        q: "In Javascript, the symbols +-* and / are:",
        options: [
            "1. operators.",
            "2. expressions.",
            "3. comparison operators.",
            "4. None of the above."
        ],
        a: "1. operators."
    },
    {
        q: "In Javascript, the expression x!=y returns false if:",
        options: [
            "1. the variables are equal.",
            "2. x is less than y.",
            "3. the variables are not equal.",
            "4 .None of the above."
        ],
        a: "1. the variables are equal."
    },
    {
        q: "In Javascript, which of the following is a logical operator?",
        options: [
            "1. |",
            "2. &&",
            "3. %",
            "4. /"
        ],
        a: "2. &&"
    },
    {
        q: "What is the correct Javascript syntax to write 'Hello World'?",
        options: [
            "1. response.write('Hello World')",
            "2. Hello World",
            "3. document.write('Hello World')",
            "4. ('Hello World)"
        ],
        a: "3. document.write('Hello World')",
    },
    {
        q: "Inside which Html element do we put the Javascript?",
        options: [
            "1. <javascript>",
            "2. <js>",
            "3. <script>",
            "4. <scripting>"
        ],
        a: "3. <script>"
    },
    {
        q: "When you want to use Javascript to manipulate the browser window, the browser window's Javascript object name is:",
        options: [
            "1. Frame",
            "2. Document",
            "3. Window",
            "4. browser_window"
        ],
        a: "3. Window"
    },
    {
        q: "Alert(message), close() and reset() are Javascript:",
        options: [
            "1. Objects",
            "2. Methods",
            "3. Properties",
            "4. commands"
        ],
        a: "2. Methods"
    },
    {
        q: "When you want to use Javascript to manipulate the currently displayed Web page, the Web page's Javascript object name is:",
        options: [
            "1. Frame",
            "2. Document",
            "3. Window",
            "4. browser_window"
        ],
        a: "2. Document"
    },
    {
        q: "In Javascript, which of the following is NOT an assignment operator?",
        options: [
            "1. +=",
            "2. ||",
            "3. *=",
            "4. ="
        ],
        a: "2. ||"
    }
];

// create landing page (start page)
var createLandingPage = function () {
    time = 75;
    i = 0;

    var timeEl = document.querySelector("#time");
    timeEl.textContent = "Time: 0";

    var landingPageContainer = document.createElement("div");
    landingPageContainer.className = "landing-page";

    var titleEl = document.createElement("h2");
    titleEl.className = "title";
    titleEl.textContent = "Coding Quiz Challenge";

    var instructionsEl = document.createElement("p");
    instructionsEl.className = "instructions";
    instructionsEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time  by ten seconds!";

    var startButtonEl = document.createElement("button");
    startButtonEl.className = "start-btn";
    startButtonEl.textContent = "Start Quiz";
    
    landingPageContainer.append(titleEl, instructionsEl, startButtonEl);
    mainContainer.appendChild(landingPageContainer);

};

// function that happens each second the timer goes down
var countdown = function() {
    var timeEl = document.querySelector("#time");
    if (time > 0) {
        timeEl.textContent = "Time: " + time;
        time--;
    } else {
        timeEl.textContent ="Time: 0";
        clearInterval(timer);
        mainContainer.innerHTML = "";
        timedOut();
    }
};

// page gets uploaded when time reaches zero
var timedOut = function () {
    var timedOutContainer = document.createElement("div");
    timedOutContainer.className = "timed-out";

    var timedOutTitle = document.createElement("h3");
    timedOutTitle.className = "timed-out-title";
    timedOutTitle.textContent = "Time has run out! Game over.";

    var timedOutGoodbye = document.createElement("p");
    timedOutGoodbye.className = "timed-out-goodbye";
    timedOutGoodbye.textContent = "Try again next time."

    var timedOutButtonReset = document.createElement("button");
    timedOutButtonReset.className = "timed-out-button-reset";
    timedOutButtonReset.textContent = "Go Back";
    timedOutContainer.append(timedOutTitle, timedOutGoodbye, timedOutButtonReset);

    mainContainer.appendChild(timedOutContainer);

    document.querySelector(".timed-out-button-reset").addEventListener("click", function () {
        timedOutContainer.remove();
        createLandingPage();
    });
};

// uploading of each question page
var quizRunThrough = function() {
    var targetEl = event.target;

    if (targetEl.matches(".start-btn")) {
        timer = setInterval(countdown, 1000);
        i = 0;
    }

    if (i < questions.length && targetEl.matches(".answer-option") || targetEl.matches(".start-btn")) {
        var questionPageContainer = document.createElement("div");
        questionPageContainer.className = "question-page";
        var questionEl = document.createElement("h3");
        questionEl.className = "question";
        questionEl.textContent = questions[i].q;
        var option1 = document.createElement("button");
        option1.className = "answer-option";
        var option2 = document.createElement("button");
        option2.className = "answer-option";
        var option3 = document.createElement("button");
        option3.className = "answer-option";
        var option4 = document.createElement("button");
        option4.className = "answer-option";
        option1.textContent = questions[i].options[0];
        option2.textContent = questions[i].options[1];
        option3.textContent = questions[i].options[2];
        option4.textContent = questions[i].options[3];
        questionPageContainer.append(questionEl, option1, option2, option3, option4);
        mainContainer.appendChild(questionPageContainer);

        if (i === 0) {
            var landingPageContainer = document.querySelector(".landing-page");
            mainContainer.replaceChild(questionPageContainer, landingPageContainer);
            document.querySelectorAll(".answer-option").forEach(link => link.addEventListener("click", () => {
                if (event.target.textContent != questions[i].a) {
                    time = time - 15;
                }

                i++;
                questionPageContainer.remove(questionEl, option1, option2, option3, option4);
            }));
            
        } else if (i < questions.length - 1 && i > 0 && time > 0) {
            document.querySelectorAll(".answer-option").forEach(link => link.addEventListener("click", () => {
                if (event.target.textContent != questions[i].a) {
                    time = time - 15;
                    questionPageContainer.remove(questionEl, option1, option2, option3, option4);
                    if (time < 0) {
                        time = 0;
                    }
                    
                }
                i++;
                console.log(i);
                questionPageContainer.remove(questionEl, option1, option2, option3, option4);                
            }));
        }
        else  {
            document.querySelectorAll(".answer-option").forEach(link => link.addEventListener("click", () => {
                if (event.target.textContent != questions[i].a) {
                    time = time - 15;
                    i++;
                    questionPageContainer.remove(questionEl, option1, option2, option3, option4);
                    if (time < 0) {
                        time = 0;
                    }
                    
                }
                console.log(questions.length);
                console.log(i);
                i++;
                questionPageContainer.remove(questionEl, option1, option2, option3, option4);
                saveScorePage();
                clearInterval(timer);
            }));
        }
        
    } 
};

// page to input initials to save high score
var saveScorePage = function() {
    var timeEl = document.querySelector("#time");
    timeEl.textContent = "Time: " + time;

    var saveScoreContainer = document.createElement("div");
    saveScoreContainer.className = "save-score-container";

    var saveScoreTitle = document.createElement("h3");
    saveScoreTitle.className = "save-score-title";
    saveScoreTitle.textContent = "All done!";

    var saveScoreDescription = document.createElement("p");
    saveScoreDescription.className = "save-score-description";
    score = time;
    saveScoreDescription.textContent = "Your final score is " + time + ".";

    var initialsContainer = document.createElement("div");
    initialsContainer.className = "initials-container"; 

    var saveInitialsDescription = document.createElement("p");
    saveInitialsDescription.className = "save-initials-description";
    saveInitialsDescription.textContent = "Enter initials:";

    var initialsForm = document.createElement("form");
    initialsForm.className = "initials-form";

    var initialsInput = document.createElement("input");
    initialsInput.className = "initials-input";
    initialsInput.setAttribute("type", "text");
    initialsInput.setAttribute("id", "initials-input");
    initialsInput.setAttribute("name", "initials-input");
    initialsInput.setAttribute("maxlength", "2");

    var initialsButton = document.createElement("button");
    initialsButton.className = "initials-button";
    initialsButton.textContent = "Submit";
    initialsButton.setAttribute("value", "Submit");
    initialsButton.setAttribute("type", "Submit");

    initialsForm.append(initialsInput, initialsButton);
    initialsContainer.append(saveInitialsDescription, initialsForm);

    var questionPageContainer = document.querySelector(".question-page");
    saveScoreContainer.append(saveScoreTitle, saveScoreDescription, initialsContainer);
    mainContainer.appendChild(saveScoreContainer);

    document.querySelector(".initials-button").addEventListener("click", function () {
        var initialsText = document.querySelector(".initials-input").value;
    
        if (initialsInput.value === "" || initialsInput.value == null) {
            alert("Please enter initials.");
            event.preventDefault();
        }
        else {
            var newHighScoreObj = {
                initials: initialsText,
                score: score
            }
            if (highScores.length > 0) {
                var previousHighScores = localStorage.getItem("highScores");
                highScores = JSON.parse(previousHighScores);
            }

            highScores.push(newHighScoreObj);
            saveHighScore();
            saveScoreContainer.remove();
            highScoresPage();
        }
    });
    
};

// set highScores array into local storage
var saveHighScore = function () {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// page that uploads to show the high scores
var highScoresPage = function () {
    var highScoresContainer = document.createElement("div");
    highScoresContainer.className = "high-scores-container";

    var highScoresTitle = document.createElement("h3");
    highScoresTitle.className = "high-scores-title";
    highScoresTitle.textContent = "High Scores";

    loadHighScores();

    var highScoresReset = document.createElement("button");
    highScoresReset.className = "high-scores-reset";
    highScoresReset.textContent = "Go Back";

    highScoresContainer.append(highScoresTitle, highScoresReset);
    
    mainContainer.appendChild(highScoresContainer);

    document.querySelector(".high-scores-reset").addEventListener("click", function () {
        highScoresContainer.remove();
        mainContainer.innerHTML = "";
        createLandingPage();
    });
};

// function to upload saved high scores
var loadHighScores = function() {
    var savedHighScores = localStorage.getItem("highScores");
    if (!savedHighScores) {
        return false;
    }
    savedHighScores = JSON.parse(savedHighScores);

    for (j = 0; j < savedHighScores.length; j++) {
        createEntry(savedHighScores[j]);

    }
};

// creates each entry for high score
var createEntry = function () {
    var savedHighScores = localStorage.getItem("highScores");
    savedHighScores = JSON.parse(savedHighScores);
    var highScoresEntry = document.createElement("p");
    highScoresEntry.className = "high-scores-entry";
    highScoresEntry.textContent = savedHighScores[j].initials + " - " + savedHighScores[j].score;
    mainContainer.append(highScoresEntry);
}

createLandingPage();

mainContainer.addEventListener("click", quizRunThrough);

document.getElementById("high-scores").addEventListener("click", function() {
    mainContainer.innerHTML = "";
    clearInterval(timer);
    highScoresPage();
});

