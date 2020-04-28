const Afdeling = require('../Models/afdeling');
const Revisor = require ('../Models/revisor');

//Der skal forklaring på hvorfor der bruges exports.index
// der bruges exports.index da det referere til filen hvori den bruges
exports.index = async(req,res)=> {
    const afdelings = await Afdeling.find({});
    const revisors = await Revisor.find({});

    res.render('index', {
        afdelings,
        revisors
    })
};