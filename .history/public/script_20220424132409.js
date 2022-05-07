console.log("script.js is loaded");


getGameName();

async function getGameName(){
    var response = await fetch('/gamename');
    var data = await response.json();
    console.log(data[0]);
}