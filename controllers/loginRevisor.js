const bcrypt = require ('bcrypt');
const Revisor = require ('../Models/revisor');

module.exports=(req,res)=>{
    const {Brugernavn, Kodeord} = req.body;
    Revisor.findOne({Brugernavn:Brugernavn}, (error,Revisor)=>{
        if (Revisor){
            bcrypt.compare(Kodeord, Revisor.Kodeord, (error, same)=>{
                if(same){
                    res.redirect('revisorprofil')
                }
                else {
                    res.redirect('login')
                }
            })
        }
    })
};