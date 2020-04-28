const path = require('path');
const Revisor =require('../Models/revisor');


//vi skal have hjælp til at forbinde med ejs
exports.opdater_revisor = function (req,res){
    Revisor.findOneAndUpdate({'Brugernavn' : (req.body.brugernavn)}, function (err, revisor){
        throw err,
            revisor,
            res.redirect('/');
    });
};