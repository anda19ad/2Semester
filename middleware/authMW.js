//Her kontrolleres der for om brugeren har logget ind ved brug af authentication middleware. Se side 107
const Revisor =require('../Models/revisor');


module.exports=(req,res,next)=>{
    Revisor.findById(req.session.RevisorId,(error, Revisor)=>{
        if(error||!Revisor)
            return res.redirect('/login');
        next() //hvis revisoren er valid nok, fortsætter de ind på siden, med denne indbyggede funktion
    })
};