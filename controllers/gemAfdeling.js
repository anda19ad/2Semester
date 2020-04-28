const Afdeling = require('../Models/afdeling');
const path = require('path');
const mongoose = require('mongoose');

var db = mongoose.connection;

module.exports = (req, res) => {
    Afdeling.save(req.body, (error, afdeling) => {
        //console.log(req.body, error, afdeling);
        res.redirect('/')
    })
};