//De modeller som databasen består af, bliver defineret her
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Definerer modellen. Datastrukturen.
const revisorSchema = new Schema({
    Fornavn:String,
    Efternavn:String,
    Email:String,
    Tlf:Number,
    startTime:Number,
    slutTime:Number,
    startMinut:Number,
    slutMinut:Number,
    Brugernavn:String,
    Kodeord:String
});

//Gør det muligt at gemme revisorer s. 95
const Revisor = mongoose.model('Revisor',revisorSchema);
module.exports = Revisor;