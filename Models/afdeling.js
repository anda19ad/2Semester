const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const afdelingSchema = new Schema({
    afdelingNavn: String,
});

const Afdeling1 = mongoose.model('Årsregnskab', afdelingSchema, 'Afdeling');
const Afdeling2 = mongoose.model('Skat og moms', afdelingSchema, 'Afdeling');
const afdelinger = [Afdeling1,Afdeling2]

module.exports = afdelinger;

console.log(afdelinger);


/*
mongoose.model('Årsregnskab', afdelingSchema, 'Afdeling'),
    mongoose.model('Skat og Moms', afdelingSchema, 'Afdeling') ]

db.afdelinger.save({afdelingNavn: Årsregnskab});


 */