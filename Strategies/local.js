// denne fil definerer strategien for passport til validering og fremvisning af bruger info.

const Revisor = require('../Models/revisor');
const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy(function(user, pass, done) {
    // We get the username and password values from the
    // form submited by the user during his login attempt.
    const ERROR = 'Invalid username/password combination';
    Revisor.findOne({ Brugernavn: user  }).then(user => {
        if (!user) {
            throw new Error(ERROR);
        }
        if (user.validatePassword(pass)) {
            return done(null, user);
        }
        throw new Error(ERROR);
    })
        .catch(err => {
            done(err);
        });
});