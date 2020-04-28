//definere revisor
const Revisor = require('../Models/revisor');
const path = require('path');

//laves API for revisor og sender res til /revisorprofil
module.exports = (req,res)=>{
    Revisor.create(req.body,(error, revisor) =>{
        res.redirect('/revisorprofil')
    })
};