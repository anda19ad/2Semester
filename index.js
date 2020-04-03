const express = require('express'); //Henter express
const app = new express(); // kalder den app, for at gøre det nemmere at bruge senere
const ejs = require('ejs'); //Anvender ejs engine
const mongoose = require('mongoose'); //For at kunne forbinde til databasen skal mongoose hentes
const bodyParser = require('body-parser'); // For at kunne lave middleware
mongoose.connect('mongodb://localhost/bookingSystemDb',{useNewUrlParser:true}); /*Der skabes forbindelse til databasen */

//henter controller filerne
const indexController = require('./controllers/indexController');
const LoginController = require('./controllers/LoginController');
const opretRevisorController = require('./controllers/opretRevisorController');
const revisorProfilController = require('./controllers/revisorProfilController');

app.get('/',indexController);
app.get('/login',LoginController);
app.get('/opretrevisor',opretRevisorController);
app.get('/revisorprofil',revisorProfilController);

app.use(express.static('public'));
app.set('view engine','ejs'); //Sætter EJS som templating engine


app.listen(2000, ()=>{
    console.log('Klar til at booke møder')
})
