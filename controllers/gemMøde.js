const møde = require('../Models/møde');
const path = require('path');

module.exports = (req,res)=>{
    møde.create(req.body,(error,møde) =>{
        console.log(req.body, error,møde);
        res.redirect('/revisorprofil')
    })
};
