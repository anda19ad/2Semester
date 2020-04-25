const bcrypt = require ('bcrypt');
const Revisor = require ('../Models/revisor');

module.exports=(req,res)=>{
    const {Brugernavn, Kodeord} = req.body;
    Revisor.findOne({Brugernavn:Brugernavn}, (error,Revisor)=>{
        if (Revisor){
            bcrypt.compare(Kodeord, Revisor.Kodeord, (error, same)=>{
                if(same){
                    req.session.RevisorId = Revisor._id
                    res.redirect('revisorprofil')
                }
                else {
                    res.redirect('login')
                }
            })
        }
        else{
            res.redirect('/login')
        }
    })
};