const Afdeling = require ('../Models/afdeling');

module.exports = async(req,res)=>{
    const afdelings = await Afdeling.find({});
    res.render('opretRevisor',{
        afdelings
    });
};
/*
module.exports=(req,res)=>{
    res.render('opretRevisor') //Henter opretRevisor.ejs
}
*/