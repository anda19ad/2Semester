//eksportere logud ved at slette sessionid vha destroy
module.exports = (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
};