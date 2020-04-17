const Revisor = require('../Models/revisor');
const path = require('path');

module.exports = (req,res)=>{
    Revisor.create(req.body,(error,revisor) =>{
        console.log(req.body, error,revisor);
        res.redirect('/')
    })
};