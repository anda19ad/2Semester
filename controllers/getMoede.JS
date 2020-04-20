const moede = require ('../Models/møde');
const path = require('path');


module.exports = async(req,res)=>{
    const moede = await moede.find({});
    console.log(moede);
    res.render('/revisorprofil',{
        moede
    });

}


