const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//formålet med filen er, at gemme og foruddefinere afdelingerne i databasen. inspiraton fundet på: https://www.tutorialkart.com/nodejs/mongoose/insert-document-to-mongodb/
var db = mongoose.connection;

//schema for afdelinger
const afdelingSchema = new Schema({
    afdelingNavn: {
        type:String,
        unique: true
    }
});

/*
//fang error, catch eller consol

HER SKAL VI LAVE EN FUNKTION DER TJEKKER OM COLLECTION ER OPRETTET OG HVIS IKKE SKAL DEN OPRETTES.

function findAfdeling() {
    db.collection.findOne('Afdeling')
}
console.log(findAfdeling());

if (findAfdeling() == null) {

}*/

// opretter collectionen Afdeling. try catch funktion.
const Afdeling = mongoose.model('AfdelingNavn', afdelingSchema, 'Afdeling');


// når programmet startes første gang, skal der oprettes documents til collectionen Afdeling.
// Dette udføres af funktionen opretAfdelinger().

function opretAfdelinger() {

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
};

// her oprettes en function der ved brug af .count metoden, tæller antallet af documents i vores collection 'Afdeling'.
//inspiration til denne, fundet på : https://stackoverflow.com/questions/26720050/how-to-count-the-number-of-documents-in-a-mongodb-collection

function afdelingAntal() {
    let antal = db.collection('Afdeling');
    antal.count().then((count) => {
        console.log(count);
    });
};

//nedenstående er et if/else statement,der vurderer om collectionen er tom. Hvis den er tom, køres opretAfdelinger().
//denne statement er essentiel ved opstart af programmet.

if (afdelingAntal() == null) {
    opretAfdelinger()
} else {
    console.log('Afdelingerne er oprettet')
};


// funktion der henter afdeling på navn

getAfdelingPåNavn

//constaritn