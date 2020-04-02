const express = require('express'); //Henter express
const app = new express(); // kalder den app, for at gøre det nemmere at bruge senere
const ejs = require('ejs'); //Anvender ejs engine
const mongoose = require('mongoose'); //For at kunne forbinde til databasen skal mongoose hentes
const bodyParser = require('body-parser'); // For at kunne lave middleware
mongoose.connect('mongodb://localhost/bookingSystemDb',{useNewUrlParser:true}); /*Der skabes forbindelse til databasen */
app.use(express.static('public'))
app.set('view engine','ejs')


app.listen(2000, ()=>{
    console.log('Klar til at booke møder')
})
