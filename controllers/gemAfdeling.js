const Afdeling = require('../Models/afdeling');
const path = require('path');
const mongoose = require('mongoose');

var db = mongoose.connection;

module.exports = (req, res) => {
    Afdeling.save(req.body, (error, afdeling) => {
        console.log(req.body, error, afdeling);
        res.redirect('/')
    })


};



/*
var dbURI = 'mongodb://localhost/bookingSystemDb';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);


    mongoose.connection.db.listCollections().toArray(function (err, afdelingNavn) {
        if (err) {
            console.log(err);
        } else {
            afdelingNavn.forEach(function (e, i, a) {
                mongoose.connection.db.dropCollection(e.afdelingNavn);
                console.log('---->', e.afdelingNavn);
            });
        }
    });

    mongoose.connection.db.collection('Afdeling').count(function (err, count) {
        console.dir(err);
        console.dir(count);

        if (count == 0) {
            opretAfdelinger()
        } else {
            next()
        }

    })
});

 */






