const User = require("../models/user.model")
const jwt = require('jsonwebtoken');

const authenticateUser = async (user) =>{
    const userExists = await User.findOne({ where: { email: user.emails[0].value } }); 
    if(userExists == null){
        await User.create({
            oauthId: user.id,
            username: user.displayName,
            email: user.emails[0].value,
            profile_picture: user.photos[0].value,
        });
    }

    return generateToken(user)
}



// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.emails[0].value, name: user.displayName },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );
};

module.exports = {authenticateUser}