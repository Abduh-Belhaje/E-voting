const passport = require("passport");
const authService = require('../services/authServices')

/********************** Oauth via google ***************************/

// Google Sign In action
exports.googleLogin = (req, res, next) => {
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })(req, res, next);
};


// Callback after Google/Github authentication
exports.googleCallback = (req, res, next) => {
    passport.authenticate(
        "google",
        { session: false, failureRedirect: "/" },
        (err, user, info) => handleAuth(req, res, next, err, user, info)
    )(req, res, next);
};


/********************** Helper Function ***************************/

const handleAuth = async (req, res, next, err, user, info) => {
    if (err || !user) {
        return res.status(401).json({
            error: "Authentication failed. Please try again.",
        });
    }
    try {
        //console.log(user)
        const resp = await authService.authenticateUser(user);
        res.redirect(
            `${process.env.CLIENT_APP_URl}/success?resp=${resp}`
        );

    } catch (error) {
        console.log(error.message)
        res.redirect(
            `${process.env.CLIENT_APP_URl}/failure`
        );
    }
};
