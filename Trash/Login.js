// Lavet af VR
// eventlistener
// JSON.stringify
// https://eloquentjavascript.net/Eloquent_JavaScript.pdf p.243, p.78

/*
document.getElementById('submit').addEventListener('click', function(e) {
    checkLogin(e);
});

function checkLogin(e) {
    e.preventDefault();
    var brugernavn = document.getElementById('brugernavn').value;
    var password = document.getElementById('password').value;
    var rigtigtLogin = false;

    var revisorer = getGemtRevisorHus().getRevisorer();
    for (var i=0; i<revisorer.length; i++)
    {
        if (brugernavn == revisorer[i].brugernavn && password == revisorer[i].kodeord) {
            console.log("rigtigt login");
            rigtigtLogin = true;
            sessionStorage.setItem("loggedInRevisorObject", JSON.stringify(revisorer[i]));
            sessionStorage.setItem("loggedInRevisorId", i);

            location.href = "revisorProfil.ejs";
            break;
        }
    }
    if (!rigtigtLogin) showErrorMessage();


}

function showErrorMessage() {
    var error = "Forkert brugernavn og/eller password"
    document.getElementById("loginMessage").innerHTML = error;
}
*/

const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Brugernavn: {
        type: String,
        unique: true,
        required: true,
    },
    Kodeord: {
        type: String,
        required: true,
    }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;