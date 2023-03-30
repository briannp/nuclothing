// RANDOM BACKGROUND

let randomChange = document.getElementById("randomChange")
images = ['resources/concert.gif', 'resources/kconcert.gif', 'resources/cuerda.gif' , 'resources/alkaline.gif', 'resources/nero.gif']


let imgCount = images.length

let number = Math.floor(Math.random()* imgCount);

window.onload = function (){
    randomChange.style.backgroundImage = "url("+images[number]+")"
}


// Navbar

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.fa-bars');
let closeBtn = document.querySelector('.fa-xmark');

menuBtn.addEventListener("click", ()=> {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", ()=> {
    menu.classList.remove('active');
});