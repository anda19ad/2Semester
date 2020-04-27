const Moede = require('../Models/møde');
const path = require('path');
const Revisor =require('../Models/revisor');

module.exports = async (req,res)=> {
    // findOne istedet for find, fordi find returnerer en liste(array) og findone kun den første den finder

    const revisor = await Revisor.findOne({'Brugernavn': req.body.brugernavn});

    // for at øge læsbarheden på koden. Det er her mødet oprettes
    const data = {...req.body, valgtRevisor: revisor._id.toString()};
    //nedenfor gemmes den i databasen med den valgte data.
    await Moede.create({
        ...data
    });

        res.redirect('/')
};

