console.log("script.js is loaded");


getGameName();

async function getGameName(){
    var response = await fetch('/gamename');
    var data = await response.json();
    let gameName = data[0].join(' ');
    console.log(gameName);
}