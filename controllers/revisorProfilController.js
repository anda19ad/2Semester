const Moede = require ('../Models/møde');
const Revisor = require ('../Models/revisor');

exports.revisorProfil = async(req,res,)=>{
    const revisor = await Revisor.findById(req.session.RevisorId);
    console.log(revisor);
    const moedes = await Moede.find({'valgtRevisor': revisor._id});
    console.log(moedes);
    res.render('revisorProfil',{
        moedes,
        revisor
    });
};