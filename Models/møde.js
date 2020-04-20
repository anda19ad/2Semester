//De modeller som databasen består af, bliver defineret her
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Definerer modellen. Datastrukturen.
const moedeSchema = new Schema({
    kundenavn:String,
    kommentar:String,
    email:String,
    tlf:String,
    moedeType: String,
    startTime:Number,
    slutTime:Number,
});

/*
if(!mongoose.connection.models['møde'])
 */
  const  moede = mongoose.model("møde", moedeSchema);
module.exports = moede;

