//De modeller som databasen består af, bliver defineret her
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//Definerer modellen. Datastrukturen.


var roles = {
    admin: 'admin',
    customer: 'customer'
};
var revisorSchema = new Schema({
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
    Brugernavn: {
        type: String,
        unique: true,
        required: true,
    },
    Kodeord: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        default: [roles.admin] }
});

// ændret Brugernavn.kodeord til this.kodeord

function encrypt () {
revisorSchema.pre('save', function (next) {
    const revisor = this;
    bcrypt.hash(revisor.Kodeord, 10, (error, hash) => {
        revisor.Kodeord = hash;
        next()
      })
    });
};

encrypt();

// laver en anden bcrypt til når du updater fremfor saver.
// ellers gemmes forrige pswd hash og man kan derfor ikke logge ind med det nye kodeord

function updateEncrypt () {
    revisorSchema.pre("findOneAndUpdate", function (next) {
        const kodeord = this.getUpdate().Kodeord;
        if (!kodeord) {
            return next();
        }
        try {
            const salt = bcrypt.genSaltSync();
            const hash = bcrypt.hashSync(kodeord, salt);
            this.getUpdate().Kodeord = hash;
            next();
        } catch (error) {
            return next(error);
        }
    });
};

updateEncrypt();




//Gør det muligt at gemme revisorer s. 95
const Revisor = mongoose.model('Revisor',revisorSchema);
module.exports = Revisor;

