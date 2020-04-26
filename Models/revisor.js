//De modeller som databasen består af, bliver defineret her

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const md5 = require('md5');
const uuid = require('shortid');
const Revisor = require('revisor/:id');



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
            hash: 10,

        },

});

/*
revisorSchema.pre('save', function (next) {
    const Brugernavn = this;


    bcrypt.hash(Brugernavn.Kodeord, 10, (error, hash) => {
        Brugernavn.Kodeord = hash;
        next()
    })
});

 */

revisorSchema.plugin(mongooseValidator);

revisorSchema.virtual('Kodeord')
    .get(function() {
        return this.passwordHash;
    })
    .set(function(pass) {
        this.Kodeord = pass;
        this.passwordHash = bcrypt.hashSync(pass, 10);
    });

revisorSchema.path('passwordHash').validate(function(pass) {
    if (this.Kodeord.length < 3) {
        this.invalidate('Kodeord', 'Kodeord skal være mere end 8 tegn');
    }
});

revisorSchema.methods.validatePassword = function(Kodeord) {
    return bcrypt.compareSync(Kodeord, this.passwordHash);
};


revisorSchema.pre('save', function(next) {
    // Allows us to just pass the form body directly to the model
    // and removes any properties that don't match the schema.
    for (prop in this) {
        if (!revisorSchema.obj.hasOwnProperty(prop)) continue;
        delete this[prop];
    }
    next();
});



//Gør det muligt at gemme revisorer s. 95
const Revisor = mongoose.model('Revisor',revisorSchema);
module.exports = Revisor;



