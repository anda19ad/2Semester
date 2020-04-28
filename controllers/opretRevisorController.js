const Afdeling = require ('../Models/afdeling');

module.exports = async(req,res)=>{
    const afdelings = await Afdeling.find({});
    res.render('opretRevisor',{
        afdelings
    });
};