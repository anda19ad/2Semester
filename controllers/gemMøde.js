//definere møde og revisor
const Moede = require('../Models/møde');
const path = require('path');
const Revisor =require('../Models/revisor');

//asynkront funktion som først finder den enkelte revisor ud fra brugernavnet
module.exports = async (req,res)=> {
// findOne istedet for blot find, fordi find returnerer en liste af revisorer(array) og findOne kun den enkelte

    const revisor = await Revisor.findOne({'Brugernavn': req.body.brugernavn});
//definere data for at kunne eksekvere revisor toString da object_id ikke kan gemmes i db uden denne metode
// for at øge læsbarheden på koden. Det er her mødet oprettes
    const data = {...req.body, valgtRevisor: revisor._id.toString()};
    //nedenfor gemmes mødet i databasen med den valgte data.
    await Moede.create({
        ...data
    });

        res.redirect('/')
};

