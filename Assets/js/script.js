var mainContainer = document.querySelector("#main-content");

var createLandingPage = function () {

    var titleEl = document.createElement("h2");
    titleEl.className = "title";
    titleEl.textContent = "Coding Quiz Challenge";

    var instructionsEl = document.createElement("p");
    instructionsEl.className = "instructions";
    instructionsEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

    var startButtonEl = document.createElement("button");
    startButtonEl.className = "start-btn";
    startButtonEl.textContent = "Start Quiz";
    
    mainContainer.append(titleEl, instructionsEl, startButtonEl);
};

createLandingPage();