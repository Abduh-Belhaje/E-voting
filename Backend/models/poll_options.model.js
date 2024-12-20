const { DataTypes } = require('sequelize');

// Define a model (e.g., Poll_Option)
const Poll_Option = sequelize.define('Poll_Option', {
    option_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    poll_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    option_value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Sync the model with the database
(async () => {
    try {
        await Poll_Option.sync(); // Use { force: true } to drop and recreate the table
        console.log('The Poll_Option table has been created or updated.');
    } catch (error) {
        console.error('Error creating the Poll_Option table:', error);
    }
})();

module.exports = Poll_Option;
