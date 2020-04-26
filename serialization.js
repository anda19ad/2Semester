// serialization af passport.

module.exports = {
    serializeUser: (user, done) => {
        done(null, user.id);
    },
    deserializeUser: async (id, done) => {
        try {
            const user = await Revisor.findById(id);
            done(null, user);
        } catch (err) {
            done(err, false);
        }
    }
};
