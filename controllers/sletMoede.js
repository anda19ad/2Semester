var MongoClient = require('mongodb').MongoClient;
var url ='mongodb://localhost/bookingSystemDb';
const Moede = require ('../Models/møde');

// skal have hjælp af øvelsesvejleder
exports.delete_moede = function (req,res){
    Moede.findOneAndDelete({_id : new mongoose.mongo.ObjectID(req.params.id)}, function (err, moede){
        throw err,
            moede,
        res.redirect('/revisorprofil');
    });
};
//få hjælp til at automatisk at slette møder efter oversatået dato