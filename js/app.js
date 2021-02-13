// console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

const checkbox = document.querySelector("#checkbox");
// console.log(window.matchMedia("(prefers-color-scheme: dark)"));

if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    console.log("que pedo");
    checkbox.setAttribute("checked",true)
}

checkbox.addEventListener("change",function () {
    console.log("cambio el toggle");
    document.body.classList.toggle("is-dark-mode");
})