// Export the user movies model
module.exports = function(sequelize, DataTypes)
{
    // Define the data types used in the model
    const userMovies = sequelize.define("userMovies",
    {
        imdbID: DataTypes.STRING,
        title: DataTypes.STRING,
        plot: DataTypes.STRING,
        poster: DataTypes.STRING,
        watched: DataTypes.BOOLEAN
    });

    // Return the model object at the end
    return userMovies;
};