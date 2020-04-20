const moede = require ('../Models/møde');
const path = require('path');


module.exports = async(req,res)=>{
    const moede = await moede.find({
        moedeType: '1',
        moedeType: '2',
        moedeType: '3'
    });
    console.log(req.body);
    res.render('/revisorprofil',{
        moede
    });

};



