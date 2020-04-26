const express = require('express'); //Henter express
const app = new express(); // kalder den app, for at gøre det nemmere at bruge senere
const ejs = require('ejs'); //Anvender ejs engine
const mongoose = require('mongoose'); //For at kunne forbinde til databasen skal mongoose hentes
const bodyParser = require('body-parser'); // For at kunne lave middleware
const expressSession = require('express-session');
mongoose.connect('mongodb://localhost/bookingSystemDb',{useNewUrlParser:true}); /*Der skabes forbindelse til databasen */

//henter controller filerne
const index = require('./controllers/indexController').index;
const LoginController = require('./controllers/LoginController');
const opretRevisorController = require('./controllers/opretRevisorController');
const revisorProfilController = require('./controllers/revisorProfilController').revisorProfil;
const gemRevisor = require ('./controllers/gemRevisor'); //En controller som anvendes til at gemme data i databasen, bliver hentet her
const gemMoede = require ('./controllers/gemMøde');
const gemAfdeling = require('./controllers/gemAfdeling');
const loginRevisor = require('./controllers/loginRevisor');
const logudcontroller = require('./controllers/logUd');


//Henter middleware (MW)
const authMW  = require('./middleware/authMW');


//Anvender bodyparser, som er en del af NodeJS, således at der automatisk kan postes data fra en html "form" til databasen
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs'); //Sætter EJS som templating engine
app.use(expressSession({secret: 'google'}));


app.listen(2000, ()=>{
    console.log('Klar til at booke møder')
})
app.get('/', index);//Den henter to modules
app.get('/login',LoginController);
app.get('/opretRevisor',opretRevisorController);
app.get('/revisorprofil', authMW, revisorProfilController);
app.post('/afdelinger/revisor',gemRevisor); //Her bliver det defineret hvor det indtastede skal postes til. '/Models/revisor' bliver brugt i form action i opretRevisor.ejs
app.post('/revisor/moede',gemMoede); // her gemmes møde - vi har lavet ø til oe, da det lavede fejl.
app.post('/afdeling', gemAfdeling);
app.post('/loginRevisor', loginRevisor);
app.get('/logud',logudcontroller);




