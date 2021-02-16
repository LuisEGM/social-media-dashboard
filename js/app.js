// console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

const checkbox = document.querySelector("#checkbox");
// console.log(window.matchMedia("(prefers-color-scheme: dark)"));

if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    checkbox.setAttribute("checked",true)
}



checkbox.addEventListener("change",function () {
    console.log("cambio el toggle");

    if(this.checked){
        document.body.classList.add("is-dark-mode");
        document.body.classList.remove("is-light-mode");
    }
    else{
        document.body.classList.add("is-light-mode");
        document.body.classList.remove("is-dark-mode");
    }

})