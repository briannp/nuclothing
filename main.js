// RANDOM BACKGROUND

let randomChange = document.getElementById("randomChange")
images = ['resources/concert.gif', 'resources/kconcert.gif', 'resources/cuerda.gif' , 'resources/alkaline.gif', 'resources/nero.gif']


let imgCount = images.length

let number = Math.floor(Math.random()* imgCount);

window.onload = function (){
    randomChange.style.backgroundImage = "url("+images[number]+")"
}