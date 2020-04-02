//De modeller som databasen består af, bliver defineret her
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Definerer modellen. Datastrukturen.
const revisorSchema = new Schema({
    fornavn:String,
    efternavn:String,
    email:String,
    tlf:String,
    startTime:Number,
    slutTime:Number,
    startMinut:Number,
    slutMinut:Number,
    brugernavn:String,
    kodeord:String,
});

if(!mongoose.connection.models['revisor'])
    revisor = mongoose.model("revisor", BlogPostSchema);
module.exports = BlogPost;