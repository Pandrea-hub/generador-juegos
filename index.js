var express = require('express');
var app = express();
var port = 3000;


app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});

app.get('/gamename',async(request,response) => {
    //run code
    var fetchApi= await fetch(
        'https://www.freetogame.com/api/games',{
        method: 'GET',
        headers: {},
        }
    );

    var gameNameResponse = await fetchApi.json();
    console.log(gameNameResponse);
    response.json(gameNameResponse);
});