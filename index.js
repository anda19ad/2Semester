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
const gemRevisor = require ('./controllers/gemRevisor'); //En controller som anvendes til at gemme data i databasen, bliver hentet her
const getMoede = require('./controllers/getMoede');
const gemMoede = require ('./controllers/gemMøde');


//Anvender bodyparser, som er en del af NodeJS, således at der automatisk kan postes data fra en html "form" til databasen
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.set('view engine','ejs'); //Sætter EJS som templating engine

app.get('/',indexController);
app.get('/login',LoginController);
app.get('/auth/opretRevisor',opretRevisorController);
app.get('/revisorprofil',revisorProfilController);
app.post('/afdelinger/revisor',gemRevisor); //Her bliver det defineret hvor det indtastede skal postes til. '/Models/revisor' bliver brugt i form action i opretRevisor.ejs
app.post('/revisor/møde',gemMoede); // her gemmes møde - vi har lavet ø til oe, da det lavede fejl.
app.get('/revisorprofil/:id',getMoede);




app.listen(2000, ()=>{
    console.log('Klar til at booke møder')
});
