const Moede = require('../Models/møde');
const path = require('path');
const Revisor = require('../Models/revisor');

module.exports = async (req,res)=> {
    await Moede.create({
        ...req.body,
        valgtRevisor: req.session.RevisorId

    });

    console.log(req.body);
        res.redirect('/')
};

