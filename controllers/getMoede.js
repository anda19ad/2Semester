const moede = require ('../Models/møde');

module.exports=async(req,res)=>{
    const moedes=await moede.find({});
    console.log(moede)
    res.render('revisorprofil',{
        moedes
    });
}
