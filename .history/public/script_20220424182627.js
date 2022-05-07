console.log("script.js is loaded");

document.querySelector('#btnLoad').addEventListener('click',()=>{
    getGameName();
});


async function getGameName(){
    var response = await fetch('/gamename');
    var data = await response.json();
    var number = random(1,518)
    var img = document.querySelector('#image');
    var a = document.querySelector('#game-url');


    if(data[number]== undefined){
        getGameName();
    }else{
        img.src = data[number].thumbnail;
        img.alt = 'Imagen del juego '+ data[number].title;
        document.querySelector('#title').textContent = data[number].title;
        document.querySelector('#genre').textContent = "Genero: "+data[number].genre;
        document.querySelector('#release_date').textContent = "Fecha de lanzamiento: "+ data[number].release_date;
        document.querySelector('#description').textContent = data[number].short_description;
        document.querySelector('#publisher').textContent = data[number].publisher;
        document.querySelector('#developer').textContent = data[number].developer;
        document.querySelector('#platform').textContent = data[number].platform;
        a.href = data[number].game_url;
        a.textContent = "Ir";
        a.target="_blank"
        
    }
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}