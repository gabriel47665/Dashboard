let troca = document.querySelector(".troca");
let body = document.querySelector("body");
let header = document.querySelector("header");
let main = document.querySelector("main");
let menuBtn = document.querySelector(".menu-btn");


//Checando se está em dark mode
let darkMode = localStorage.getItem("darkMode");
if(darkMode === "active"){
    troca.classList.toggle("active")
    body.classList.toggle("dark")
}

//Checando se o menu está colapsado
let colapseMenu = localStorage.getItem("colapseMenu");
if(colapseMenu === "active"){
    header.classList.toggle("active");
    main.classList.toggle("active");
}

//Ao clicar no switch alterna entre os modos
troca.addEventListener("click", function(){
    troca.classList.toggle("active");
    body.classList.toggle("dark");
    if(localStorage.getItem("darkMode") === "active"){
        localStorage.setItem("darkMode", "");
    }else{
        localStorage.setItem("darkMode", "active");
    }
});

menuBtn.onclick = function (){
    header.classList.toggle("active");
    main.classList.toggle("active");
    if(localStorage.getItem("colapseMenu") === "active"){
        localStorage.setItem("colapseMenu", "");
    }else{
        localStorage.setItem("colapseMenu", "active");
    }
}
