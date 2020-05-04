//definere bcrypt for at kryptere kodeord inden den gemmes i database
const bcrypt = require ('bcrypt');
const Revisor = require ('../Models/revisor');


module.exports=(req,res)=>{
    const {Brugernavn, Kodeord} = req.body;
//finder den enkelte revisor og sammenligner brugernavn
    Revisor.findOne({Brugernavn:Brugernavn}, (error,Revisor)=>{
        if (Revisor){
//hvis krypteret kodeord matcher med den valgte revisors kodeord sendes man til /revisorprofil
            bcrypt.compare(Kodeord, Revisor.Kodeord, (error, same)=>{
                if(same){
                    req.session.RevisorId = Revisor._id
                    res.redirect('revisorprofil')
                }
//hvis kodeord ikke matcher forbliver man på/sendes man til /login
                else {
                    res.redirect('login')
                }
            })
        }
//er der intet match overhovedet forbliver man på/sendes man til /login
        else{
            res.redirect('/login')
        }
    })
};