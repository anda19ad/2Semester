const Afdeling = require('../Models/afdeling');

module.exports = async(req,res)=> {
    const afdelings = await Afdeling.find({});
    res.render('index', {
        afdelings
    });
};

const Revisor = require ('../Models/revisor');

module.exports = async(req,res)=>{
    const revisors = await Revisor.find({});
    res.render('index',{
        revisors
    });
};


