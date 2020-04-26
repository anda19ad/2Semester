const express = require('express'); //Henter express
const app = new express(); // kalder den app, for at gøre det nemmere at bruge senere
const ejs = require('ejs'); //Anvender ejs engine
const mongoose = require('mongoose'); //For at kunne forbinde til databasen skal mongoose hentes
const connect = require('/mongo');
const bodyParser = require('body-parser'); // For at kunne lave middleware
const expressSession = require('express-session');
mongoose.connect('mongodb://localhost/bookingSystemDb',{useNewUrlParser:true}); /*Der skabes forbindelse til databasen */
const serialization = require('/serialization');

//henter controller filerne
const index = require('./controllers/indexController').index;
const LoginController = require('./controllers/LoginController');
const opretRevisorController = require('./controllers/opretRevisorController');
const revisorProfilController = require('./controllers/revisorProfilController');
const gemRevisor = require ('./controllers/gemRevisor'); //En controller som anvendes til at gemme data i databasen, bliver hentet her
const gemMoede = require ('./controllers/gemMøde');
const gemAfdeling = require('./controllers/gemAfdeling');
const loginRevisor = require('./controllers/loginRevisor');

//Henter middleware (MW)
const authMW = require('./middleware/authMW');


//Anvender bodyparser, som er en del af NodeJS, således at der automatisk kan postes data fra en html "form" til databasen
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs'); //Sætter EJS som templating engine
app.use(expressSession({secret: 'google', saveUninitialized: false,
    resave: false}));



// her skal vi selv indsæt vores ønsket req, så dvs. brugerens detaljer skal req og res.
app.use(function(_, _, next) {
    if (!mongoose.connection.readyState) {
        connect().then(() => next());
        // async/await
        // await connect();
        // next();
    } else
        next();
});

app.use(function(_, _, next) {
    if (mongoose.connection.readyState) {
        mongoose.disconnect();
    }
    next();
});

// view engine setup
const hbs = exphbs.create({
    defaultLayout: 'main'
});
app.engine('handlebars', hbs.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Initialize passport.
passport.use(localStrategy);

// setter serialization handlers.
passport.serializeUser(serialization.serializeUser);
passport.deserializeUser(serialization.deserializeUser);

app.use(passport.initialize());
app.use(passport.session());


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

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/revisorprofil',
        failureRedirect: '/login'
    })
);

