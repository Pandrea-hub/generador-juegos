var express = require('express');
var app = express();
var port = 3000;


app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});

app.get('/gamename',async(request,response) => {
    //run code
    fetch(
        'https://www.freetogame.com/api/games',{
        method: 'GET',
        headers: {},
        }
    );
});