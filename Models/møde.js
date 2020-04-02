//De modeller som databasen består af, bliver defineret her
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Definerer modellen. Datastrukturen.
const mødeSchema = new Schema({
    kundenavn:String,
    kommentar:String,
    email:String,
    tlf:String,
    startTime:Number,
    slutTime:Number,
});

if(!mongoose.connection.models['møde'])
    møde = mongoose.model("møde", BlogPostSchema);
module.exports = BlogPost;