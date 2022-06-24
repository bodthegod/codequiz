// setting up all objects
const btn_start = document.querySelector(".btn-start button");
const guide_box = document.querySelector(".guide-box");
const btn_exit = guide_box.querySelector(".buttons .exit");
const btn_continue = guide_box.querySelector(".buttons .restart");

btn_start.onclick = ()=>{
    guide_box.classList.add("showBox");

}