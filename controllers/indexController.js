const Afdeling = require('../Models/afdeling');
const Revisor = require ('../Models/revisor');

// der bruges exports.index da det referere til filen hvori den bruges
//yderligere bruges .index til at kalde funktionen
// en api hvor man kan gå ind og oprette revisor og mongoose er api hvor du kan gemme ting i database.
exports.index = async(req,res)=> {
//her defineres afdelings som består af alle afdelinger, det samme med revisor
    const afdelings = await Afdeling.find({});
    const revisors = await Revisor.find({});
//her renders de ovenstående definerede til index
    res.render('index', {
        afdelings,
        revisors
    })
};