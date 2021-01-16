var mainContainer = document.querySelector("#main-content");

var questions = [
    {
        q: "In Javascript, the symbols +-* and / are:",
        options: [
            "operators.",
            "expressions.",
            "comparison operators.",
            "None of the above."
        ],
        a: "operators."
    },
    {
        q: "In Javascript, the expression x!=y returns false if:",
        options: [
            "the variables are equal.",
            "x is less than y.",
            "the variables are not equal.",
            "None of the above."
        ],
        a: "the variables are equal."
    },

    {
        q: "In Javascript, which of the following is a logical operator?",
        options: [
            "|",
            "&&",
            "%",
            "/"
        ],
        a: "&&"
    },
    {
        q: "When you want to use Javascript to manipulate the browser window, the browser window's Javascript object name is:",
        options: [
            "Frame",
            "Document",
            "Window",
            "browser_window"
        ],
        a: "Window"
    },
    {
        q: "Alert(message), close() and reset() are Javascript:",
        options: [
            "Objects",
            "Methods",
            "Properties",
            "commands"
        ],
        a: ""
    },
    {
        q: "When you want to use Javascript to manipulate the currently displayed Web page, the Web page's Javascript object name is:",
        options: [
            "Frame",
            "Document",
            "Window",
            "browser_window"
        ],
        a: "Document"
    },
    {
        q: "In Javascript, which of the following is NOT an assignment operator?",
        options: [
            "+=",
            "||",
            "*=",
            "="
        ],
        a: "||"
    },
    {
        q: "A named element in a Javascript program that is used to store and retrieve data is a ___.",
        options: [
            "Method",
            "string",
            "Variable",
            "for loop"
        ],
        a: "Variable"
    },
    {
        q: "How do you write 'Hello World' in an alert box?",
        options: [
            "alert('Hello World')",
            "msgBox('Hello World')",
            "alertBox='Hello World'",
            "alertBox('Hello World')"
        ],
        a: "alert('Hello World')"
    },
    {
        q: "What is the correct syntax for reffering to an external script called 'xxx.js'?",
        options: [
            "<script src='xxx.js'>",
            "<script name='xxx.js'>",
            "<script href='xxx.js'>",
            "<script value='xxx.js'>"
        ],
        a: "<script src='xxx.js'>"
    },
    {
        q: "Where is the correct place to insert Javascript?",
        options: [
            "The <footer> section",
            "The <head> section",
            "The <body> section",
            "Both the <head> and <body> section"
        ],
        a: "Both the <head> and <body> section"

    },
    {
        q: "What is the correct Javascript syntax to write 'Hello World'?",
        options: [
            "response.write('Hello World')",
            "Hello World",
            "document.write('Hello World')",
            "('Hello World)"
        ],
        a: "document.write('Hello World')",
    },
    {
        q: "Inside which Html element do we put the Javascript?",
        options: [
            "<javascript>",
            "<js>",
            "<script>",
            "<scripting>"
        ],
        a: "<script>"
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

var startQuiz = function() {
    let time = 75;
    var targetEl = event.target;

    if (targetEl.matches(".start-btn")) {
        let myTimer = setInterval(function() {
            if (time > 0 && questions.length > 0) {
                var timeEl = document.querySelector("#time");
                timeEl.textContent = "Time: " + time;
                time--;
                createQuestion();

            } else {
                clearInterval(myTimer);
            }
        }, 1000);
    }
};

var createQuestion = function() {
    for (var i = 0; i < questions.length; i++) {
        var questionEl = document.createElement("h3");
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
        mainContainer.append(questionEl, option1, option2, option3, option4);


        
    };
};

var quizRunThrough = function () {
    createLandingPage();
    mainContainer.addEventListener("click", startQuiz);
    
    
};

quizRunThrough();


