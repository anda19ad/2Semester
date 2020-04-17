const mongoose = require('mongoose');
const Revisor = require('./Models/revisor')
mongoose.connect('mongodb://localhost/test_database',{useNewUrlParser:true});
Revisor.create({
    Fornavn:'Andreas',
    Efternavn:'Dam-Amby',
    Email:'andreasdam.amby@gmail.com'
}, (error,revisor)=>{
    console.log(error,revisor)
});