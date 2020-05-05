var MongoClient = require('mongodb').MongoClient;
var url ='mongodb://localhost/bookingSystemDb';
const Moede = require ('../Models/møde');
const Revisor =require('../Models/revisor');

// Funktion der gør det muligt at slette et enkelt møde ad gangen
//
exports.delete_moede = async function (req,res){
    console.log(req.body);
    Moede.findOneAndDelete({'_id': req.params.id}, async function (err, moede){
        if (err) console.log(err);
            console.log(moede),
        res.redirect('/revisorprofil');
    });
};
