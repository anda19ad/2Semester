const Moede = require ('../Models/møde');



module.exports = async(req,res)=>{
    const moedes = await Moede.find({});
    res.render('revisorprofil',{
        moedes
    });
};
document.getElementById(Moede);
