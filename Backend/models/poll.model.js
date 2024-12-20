const { DataTypes } = require('sequelize');

// Define a model (e.g., Poll)
const Poll = sequelize.define('Poll', {
    poll_id: {
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
        await Poll.sync(); // Use { force: true } to drop and recreate the table
        console.log('The Poll table has been created or updated.');
    } catch (error) {
        console.error('Error creating the Poll table:', error);
    }
})();

module.exports = Poll;
