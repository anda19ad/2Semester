const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Hardcoder de forskellige afdelinger som virksomheden består af
class classAfdeling{
    constructor(afdelingNavn, revisorer) {
        this.afdeling = afdelingNavn;
        this.revisorer = revisorer;
    }
}

const afdeling1 = new classAfdeling ('Skat');
const afdeling2 = new classAfdeling('Årsregnskab');
const afdeling3 = new classAfdeling('Bogføring');


const afdelingSchema = new Schema({
    afdelingNavn: String,
    revisorid: Array
});

const afdeling = mongoose.model('afdeling',afdelingSchema);
module.exports = afdeling;