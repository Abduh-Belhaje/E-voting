const { DataTypes } = require('sequelize');

// Define a model (e.g., Poll_Participation)
const Poll_Participation = sequelize.define('Poll_Participation', {
    poll_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    option_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

// Sync the model with the database
(async () => {
    try {
        await Poll_Participation.sync(); // Use { force: true } to drop and recreate the table
        console.log('The Poll_Participation table has been created or updated.');
    } catch (error) {
        console.error('Error creating the Poll_Participation table:', error);
    }
})();

module.exports = Poll_Participation;
