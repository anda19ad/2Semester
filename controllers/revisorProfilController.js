const Moede = require ('../Models/møde');

module.exports = async(req,res)=>{
    const moedes = await Moede.find({});
    console.log(req.session)
    res.render('revisorProfil',{
        moedes
    });
};

