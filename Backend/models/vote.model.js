const { DataTypes } = require('sequelize');

// Define a model (e.g., Vote)
const Vote = sequelize.define('Vote', {
    vote_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    qst: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    create_by: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    create_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});

// Sync the model with the database
(async () => {
    try {
        await Vote.sync(); // Use { force: true } to drop and recreate the table
        console.log('The Vote table has been created or updated.');
    } catch (error) {
        console.error('Error creating the Vote table:', error);
    }
})();

module.exports = Vote;
