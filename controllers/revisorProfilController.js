const Moede = require ('../Models/møde');
const Revisor = require ('../Models/revisor');

exports.revisorProfil = async(req,res,)=>{
    const moedes = await Moede.find({});
    const revisors = await Revisor.find({});
    res.render('revisorProfil',{
        moedes,
        revisors
    });
};


/*
module.exports = (req,res) =>{
    if(req.session.RevisorId){
        return res.render("revisorProfil");
    };
    res.redirect('/revisorProfil')
}
*/
