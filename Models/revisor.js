//De modeller som databasen består af, bliver defineret her
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

//Definerer modellen. Datastrukturen.

    const revisorSchema = new Schema({
        Fornavn: {
            type: String,
            required: true,
        },
        Efternavn: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            unique: true,
            required: true,
        },
        Tlf: {
            type: Number,
            unique: true,
            required: true,
        },
        startTime: Number,
        slutTime: Number,
        startMinut: Number,
        slutMinut: Number,
        Brugernavn: {
            type: String,
            unique: true,
            required: true,
        },
        Kodeord: {
            type: String,
            required: true,
        }
    });


revisorSchema.pre('save', function (next) {
    const Brugernavn = this;

    bcrypt.hash(Brugernavn.Kodeord, 10, (error, hash) => {
        Brugernavn.Kodeord = hash;
        next()
    })
});

//Gør det muligt at gemme revisorer s. 95
const Revisor = mongoose.model('Revisor',revisorSchema);
module.exports = Revisor;

