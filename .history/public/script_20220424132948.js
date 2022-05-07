console.log("script.js is loaded");


getGameName();

async function getGameName(){
    var response = await fetch('/gamename');
    var data = await response.json();
    console.log(data[random(1,518)]);
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}