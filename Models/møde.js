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
    dato: Date,
    valgtRevisor: {
        //hver revisor har mange møder, kun 1 møde til revisor
        type: mongoose.Schema.Types.ObjectID,
        ref: 'revisors',
    },
    //tid: Date,  Hvilken type skal det være ??
   // time : Number,
});

const Moede = mongoose.model("Moede", MoedeSchema);
module.exports = Moede;