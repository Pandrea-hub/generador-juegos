console.log("script.js is loaded");


getGameName();

async function getGameName(){
    var response = await fetch('/gamename');
    var data = await response.json();
    var number = random(1,518)
    console.log(data[random(number)],number);
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}