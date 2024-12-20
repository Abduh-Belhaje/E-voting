const { DataTypes } = require('sequelize');
const db = require('../config/db.connect')

// Define a model (e.g., User)
const User = db.sequelize.define('User', {
    oauthId: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    profile_picture: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Sync the model with the database
(async () => {
    try {
        await User.sync(); // Use { force: true } to drop and recreate the table
        console.log('The User table has been created or updated.');
    } catch (error) {
        console.error('Error creating the User table:', error);
    }
})();

module.exports = User;
