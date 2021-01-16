var mainContainer = document.querySelector("#main-content");
var time = 50;
var i = 0;

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
    },
    {
        q: "A named element in a Javascript program that is used to store and retrieve data is a ___.",
        options: [
            "1. Method",
            "2. string",
            "3. Variable",
            "4. for loop"
        ],
        a: "3. Variable"
    },
    {
        q: "How do you write 'Hello World' in an alert box?",
        options: [
            "1. alert('Hello World')",
            "2. msgBox('Hello World')",
            "3. alertBox='Hello World'",
            "4. alertBox('Hello World')"
        ],
        a: "1. alert('Hello World')"
    },
    {
        q: "What is the correct syntax for reffering to an external script called 'xxx.js'?",
        options: [
            "1. <script src='xxx.js'>",
            "2. <script name='xxx.js'>",
            "3. <script href='xxx.js'>",
            "4. <script value='xxx.js'>"
        ],
        a: "1. <script src='xxx.js'>"
    },
    {
        q: "Where is the correct place to insert Javascript?",
        options: [
            "1. The <footer> section",
            "2. The <head> section",
            "3. The <body> section",
            "4. Both the <head> and <body> section"
        ],
        a: "4. Both the <head> and <body> section"

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
    }
];

var createLandingPage = function () {

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

var startQuiz = function() {
    var targetEl = event.target;

    if (targetEl.matches(".start-btn")) {
          
        let myTimer = setInterval(function() {
            var timeEl = document.querySelector("#time");
            if (time > 0) {
                timeEl.textContent = "Time: " + time;
                time--;
            } else {
                timeEl.textContent ="Time: 0";
                clearInterval(myTimer);
            }
        }, 1000);

        createQuestion();
    }
};

var createQuestion = function() {
    var questionPageContainer = document.createElement("div");
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
        document.querySelector(".answer-option").addEventListener("click", function(){
            i++
            if (event.target === false) {
                time = time - 15;
            } 

            questionPageContainer.remove(questionEl, option1, option2, option3, option4);
            console.log(questionPageContainer);
            createQuestion();
        });
    } else if (i < questions.length && i > 0) {
        document.querySelector(".answer-option").addEventListener("click", function(){
            i++;
            questionPageContainer.remove(questionEl, option1, option2, option3, option4);
            console.log(questionPageContainer);
            createQuestion();
        });
    }
};

var quizRunThrough = function () {
    createLandingPage();
    mainContainer.addEventListener("click", startQuiz);
    
    
};

quizRunThrough();
