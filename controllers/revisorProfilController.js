const Moede = require ('../Models/møde');

module.exports = async(req,res,)=>{
    const moedes = await Moede.find({});
    console.log(req.session)
    res.render('revisorProfil',{
        moedes
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
