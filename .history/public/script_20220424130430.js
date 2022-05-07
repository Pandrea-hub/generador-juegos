console.log("script.js is loaded");

async function getGameName(){
    var response = await fetch('/gamename');
    var data = await response.json();
    console.log(data);
}