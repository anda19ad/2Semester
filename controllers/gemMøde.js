const moede = require('../Models/møde');
const path = require('path');

module.exports = (req,res)=>{
    moede.create(req.body,(error,moede) =>{
        console.log(req.body, error,moede);
        res.redirect('/revisorprofil')
    })
};

