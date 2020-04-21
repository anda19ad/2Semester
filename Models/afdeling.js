const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//formålet med filen er, at gemme og foruddefinere afdelingerne i databasen. inspiraton fundet på: https://www.tutorialkart.com/nodejs/mongoose/insert-document-to-mongodb/
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful!");


const afdelingSchema = new Schema({
    afdelingNavn: {
        type:String,
        unique: true
    }
});


// angiver afdeling modellen således vi kan oprette individuelle afdelinger
var Afdeling = mongoose.model('AfdelingNavn', afdelingSchema, 'Afdeling');


//individuelle afdelinger/documents oprettes
var Afdeling1 = new Afdeling( {afdelingNavn: 'Årsregnskab'} );
var Afdeling2 = new Afdeling( { afdelingNavn: 'Skat og moms'} );

//her gemmes documents til db vha. .save

    Afdeling1.save(function (err, afdeling) {
        if (err) return console.error(err);
        console.log(afdeling.afdelingNavn + " er oprettet");
    });

    Afdeling2.save(function (err, afdeling) {
        if (err) return console.error(err);
        console.log(afdeling.afdelingNavn + " er oprettet");
    });
});







/*

const Afdeling1 = mongoose.model('Årsregnskab', afdelingSchema, 'Afdeling');
const Afdeling2 = mongoose.model('Skat og moms', afdelingSchema, 'Afdeling');
const afdelinger = [Afdeling1,Afdeling2]

module.exports = afdelinger;

console.log(afdelinger);

 */


/*
mongoose.model('Årsregnskab', afdelingSchema, 'Afdeling'),
    mongoose.model('Skat og Moms', afdelingSchema, 'Afdeling') ]

db.afdelinger.save({afdelingNavn: Årsregnskab});


 */