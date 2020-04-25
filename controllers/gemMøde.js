const Moede = require('../Models/møde');
const path = require('path');

module.exports = async (req,res)=> {
    await Moede.create(req.body)
    console.log(req.body);
        res.redirect('/')
};

