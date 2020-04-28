const Moede = require ('../Models/møde');
const Revisor = require ('../Models/revisor');

exports.revisorProfil = async(req,res,)=>{
    const revisor = await Revisor.findById(req.session.RevisorId);
    const moedes = await Moede.find({'valgtRevisor': revisor._id});
    res.render('revisorProfil',{
        moedes,
        revisor
    });
};