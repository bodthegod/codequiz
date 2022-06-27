// setting up all objects
const btn_start = document.querySelector(".btn-start button");
const guide_box = document.querySelector(".guide-box");
const game_area = document.querySelector(".game-area");
const answer_select = document.querySelector("#answer-select");
const btn_exit = guide_box.querySelector(".buttons .exit");
const btn_continue = document.querySelector(".buttons .restart");

// start button onclick function
btn_start.onclick = ()=>{
    guide_box.classList.add("showBox");
}

// exit button onclick function
btn_exit.onclick = ()=>{
    guide_box.classList.remove("showBox");
}

// continue button onclick function
btn_continue.onclick = ()=>{
    guide_box.classList.remove("showBox");
    game_area.classList.add("showGame");
// calls displayQuestion function
    displayQuestion(0);
    createQuestionCounter(1);
}

let question_counter = 0;
let question_integer = 1;

// next question button
const next_q = game_area.querySelector("#next-q-button");

next_q.onclick = ()=>{
// increments question counter by +1
    if(question_counter < qdata.length - 1){
        question_counter++;
        question_integer++;
        displayQuestion(question_counter);
        createQuestionCounter(question_integer);
    }else{
        console.log("Finished Quiz!")
    }
}

//function to display questions
function displayQuestion(index){
    const question_display = document.querySelector("#question-display");
    // displays question text from qdata js file
    let question_text = '<span>'+ qdata[index].qnumber + "." + qdata[index].qname + '</span>';
    // displays answers from qdata js file 
    let answer_text = '<div class="answer">' + qdata[index].qselection[0] + '<span></span></div>'
                    + '<div class="answer">' + qdata[index].qselection[1] + '<span></span></div>'
                    + '<div class="answer">' + qdata[index].qselection[2] + '<span></span></div>'
                    + '<div class="answer">' + qdata[index].qselection[3] +'<span></span></div>'
    question_display.innerHTML = question_text;
    answer_select.innerHTML = answer_text;
    const answer = answer_select.querySelectorAll(".answer");
    for (let i = 0; i < answer.length; i++) {
        answer[i].setAttribute("onclick", "answerChosen(this)");
    }
}
// function to log correct and incorrect answers
function answerChosen(option){
    let userOption = option.textContent;
    let rightOption = qdata[question_counter].qanswer;
    let allOptions = answer_select.children.length;
    if(userOption === rightOption){
        option.classList.add("correct");
        console.log("You got it right!");
    }else{
        option.classList.add("incorrect");
        console.log("Wrong Answer");
    }
    // display correct answer upon incorrect choice
    for (let i = 0; i < allOptions; i++) {
        if(answer_select.children[i].textContent == rightOption) {
            answer_select.children[i].setAttribute("class", "answer correct");
        }
    }

    // adds muted class to prevent further answer selections
    for (let i = 0; i < allOptions; i++) {
        answer_select.children[i].classList.add("muted");
    }
}
// creates innerhtml to display question counter
function createQuestionCounter(index){
const question_of_count = game_area.querySelector("#question-count");
let questionNumber = '<span><p>' + index + '</p>Out of<p>' + qdata.length + '</p></span>';
question_of_count.innerHTML = questionNumber;
}