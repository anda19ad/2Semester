//De modeller som databasen består af, bliver defineret her
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Definerer modellen. Datastrukturen.
const MoedeSchema = new Schema({
    kundenavn:String,
    kommentar:String,
    email:String,
    tlf: String,
    //hvis vi ændrer møde type til revisor kan det nok virke så det er forbundet,
    // det er også nu, men skal ændres fra Mtype til revisor
    moedeType: String,
    startTime:Number,
    slutTime:Number,
    dato: Date,
    //tid: Date,  Hvilken type skal det være ??
    time : Number,
});

/*
if(!mongoose.connection.models['møde'])
 */
const Moede = mongoose.model("Moede", MoedeSchema);
module.exports = Moede;

