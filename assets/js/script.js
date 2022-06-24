// setting up all objects
const btn_start = document.querySelector(".btn-start button");
const guide_box = document.querySelector(".guide-box");
const game_area = document.querySelector(".game-area");
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
    displayQuestion(3);
}

let question_counter = 0;

//function to display questions
function displayQuestion(index){
    const question_display = document.querySelector("#question-display");
    const answer_select = document.querySelector("#answer-select");
    let question_text = '<span>'+ qdata[index].qname + '</span>';
    let answer_text = '<div class="answer"><span></span></div>'
                    + '<div class="answer"><span></span></div>'
                    + '<div class="answer"><span></span></div>'
                    + '<div class="answer"><span></span></div>'
    question_display.innerHTML = question_text;
}