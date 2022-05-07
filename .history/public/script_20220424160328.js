console.log("script.js is loaded");

document.querySelector('#btnLoad').addEventListener('click',()=>{
    getGameName();
});


async function getGameName(){
    var response = await fetch('/gamename');
    var data = await response.json();
    var number = random(1,518)
    var img = document.querySelector('#image');


    if(data[number]== undefined){
        getGameName();
    }else{
        img.src = data[number].thumbnail;
        document.querySelector('#title').textContent = data[number].title;
        document.querySelector('#genre').textContent = data[number].genre;
        
    }
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}