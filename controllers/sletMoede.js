var MongoClient = require('mongodb').MongoClient;
var url ='mongodb://localhost/bookingSystemDb';
const Moede = require ('../Models/møde');

/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("bookingSystemDb");
    /*Delete the first customers with the address "Mountain 21":
    var myquery = { _id: 'Mountain 21' };
    dbo.collection("moedes").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});

 */
// skal have hjælp af øvelsesvejleder
exports.delete_moede = function (req,res){
    Moede.findOneAndDelete({_id : new mongoose.mongo.ObjectID(req.params.id)}, function (err, moede){
        throw err,
            moede,
        res.redirect('/revisorprofil');
    });
};
