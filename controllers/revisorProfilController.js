const Moede = require ('../Models/møde');
const Revisor = require ('../Models/revisor');

exports.revisorProfil = async(req,res,)=>{
    const revisors = await Revisor.findById(req.session.RevisorId);
    console.log(revisors);
    const moedes = await Moede.find({});
    res.render('revisorProfil',{
        moedes,
        revisors
    });
};


/*
exports.getById = async (req, res) =>{
    const id = req.param.id
    const revisor = await Revisor.findOne({"_id": id});
    res.render('revisorProfil',{
        revisor
    })
};

 */

/*
exports.revisorProfil = async(req,res,)=>{
    const moedes = await Moede.find({});
    const revisors = await Revisor.find({});
    res.render('revisorProfil',{
        moedes,
        revisors
    });
};

*/


/*
module.exports = (req,res) =>{
    if(req.session.RevisorId){
        return res.render("revisorProfil");
    };
    res.redirect('/revisorProfil')
}
*/
