const Afdeling = require('../Models/afdeling');
const Revisor = require ('../Models/revisor');

/*
exports.Afdeling = async(req,res)=> {
    const afdelings = await Afdeling.find({});
    res.render('index', {
        afdelings
    })
};

exports.Revisor = async(req,res)=> {
    const revisors = await Revisor.find({});
    res.render('index', {
        revisors
    });
};

 */

exports.index = async(req,res)=> {
    const afdelings = await Afdeling.find({});
    const revisors = await Revisor.find({});
    res.render('index', {
        afdelings,
        revisors
    })
};