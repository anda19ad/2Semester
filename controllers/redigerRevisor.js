const path = require('path');
const Revisor =require('../Models/revisor');


//vi skal have hjælp til at forbinde med ejs
//laver findOneAndReplace på revisorens attributter, foaUpdate den opdaterer attributterne en af gangen. Hvilket er meget langgsommere
exports.opdater_revisor = function (req,res){
    console.log(req.body);
    Revisor.findOneAndUpdate({'_id' : (req.params.id)}, {...req.body},
        //funktion der bliver kaldt efter db har lavet ovenstående. Enten smider den en fejl eller viser den oprettede revisor.
        function (err, revisor){
        if (err){
            console.log(err)
        } console.log(revisor);
            res.redirect('/revisorprofil');
    });
};