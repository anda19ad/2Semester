var MongoClient = require('mongodb').MongoClient;
var url ='mongodb://localhost/bookingSystemDb';
const Moede = require ('../Models/møde');
const Revisor =require('../Models/revisor');

// skal have hjælp af øvelsesvejleder
exports.delete_moede = async function (req,res){
    console.log(req.body);
    Moede.findOneAndDelete({'_id': req.params.id}, async function (err, moede){
        if (err) console.log(err);
            console.log(moede),
        res.redirect('/revisorprofil');
    });
};
//få hjælp til at automatisk at slette møder efter oversatået dato
