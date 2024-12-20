const { DataTypes } = require('sequelize');

// Define a model (e.g., Vote_Participation)
const Vote_Participation = sequelize.define('Vote_Participation', {
    vote_id: {
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
        await Vote_Participation.sync(); // Use { force: true } to drop and recreate the table
        console.log('The Vote_Participation table has been created or updated.');
    } catch (error) {
        console.error('Error creating the Vote_Participation table:', error);
    }
})();

module.exports = Vote_Participation;
