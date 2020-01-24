// Export the user movies model
module.exports = function(sequelize, DataTypes)
{
    // Define the data types used in the model
    const userMovies = sequelize.define("userMovies",
    {
        imdbID: DataTypes.STRING,
        title: DataTypes.STRING,
        plot: DataTypes.STRING,
        watched: DataTypes.BOOLEAN
    });

    // Associate the userMovies model with the users
    // userMovies.associate = function(models)
    // {
    //     // User movies belong to the user's created movie list
    //     userMovies.belongsTo(models.users,
    //         {
    //             foreignKey: {allowNull: false}
    //         });
    // };

    // Return the model object at the end
    return userMovies;
};